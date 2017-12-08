// Settings:
let connect = true;
let masterHost = 'localhost';


// Paper extensions:

let ip = paper.Item.prototype;


// Easy getters / setters for position relative to item origin
class RelativePosition {

  constructor(item) {
    this._item = item;
    this._p = new paper.Point(this.x, this.y);
  }

  set x(value) {
    this._p.x = value;
    this.updateItem();
  }

  set y(value) {
    this._p.y = value;
    this.updateItem();
  }

  set angle(value) {
    this._p.angle = value;
    this.updateItem();
  }

  set length(value) {
    this._p.length = value;
    this.updateItem();
  }

  updateItem() {
    this._item.position.x = this._item.origin.x + this._p.x;
    this._item.position.y = this._item.origin.y + this._p.y;
  }

  get x() {
    return this._item.position.x - this._item.origin.x;
  }

  get y() {
    return this._item.position.y - this._item.origin.y;
  }

  get angle() {
    return this._p.angle;
  }

  get length() {
    return this._p.length;
  }
}

Object.defineProperties(ip, {
  relativePosition: {
    set(point) {
      let p = new RelativePosition(this);
      p.x = point.x;
      p.y = point.y;
    },

    get() {
      return new RelativePosition(this);
    }
  }
});

// Base driver for animations
class Animation {
  constructor(from = 0, to = 1, speed = 0.5) {
    this.from = from;
    this.to = to;
    this.speed = speed;
    this._value = from;
    this._step = 0;
  }

  step() {
    let diff = this.to - this.from;
    let dir = (diff < 0) ? -1 : 1;
    this._value = this.from + (this._value + this.speed * dir - this.from);
  }

  get value() {
    return this._value;
  }
}

// Driver for back and forth animations
class Yoyo extends Animation {
  step() {
    let diff = this.to - this.from;
    let dir = (diff < 0) ? -1 : 1;
    this._step += this.speed / 10;
    this._value = this.from + Math.sin(this._step) * diff * 0.5 + diff * 0.5;
  }
}

// Driver for loop animations
class Loop extends Animation {
  step() {
    let diff = this.to - this.from;
    let dir = (diff < 0) ? -1 : 1;
    this._value = this.from + ((this._value + this.speed * dir - this.from) % diff);
  }
}


// Expose data and data utilities:
let data = {
  value: 0.5,
  mapBetween(from, to) {
    return between(from, to, this.value);
  },
  isBetween(a, b) {
    let low = Math.min(a, b);
    let high = Math.max(a, b);
    return (this.value >= low && this.value < high);
  },
  isntBetween(a, b) {
    return !this.isBetween(1, b);
  }
};

// 0-1 Interpolation
function between(from, to, step) {
  return from + ((to - from) * step);
}


// TODO: Random animation driver (perlin noise)


// Easy random fuctions:
function randomNumber(max) {
  return Math.random() * max;
}

function randomPoint(max) {
  return new paper.Point({
    x: randomNumber(max),
    y: randomNumber(max)
  });
}


// Improved SVG loading 
function loadSVG(path) {
  paper.project.importSVG(paper.project.svgName, function (svg) {
    fixSVG(svg);
    paper.view.svg = svg;
    if (paper.project.svgReady)
      setTimeout(paper.project.svgReady, 200);
  });
}


// Handle some paperjs glitches
function fixSVG(svg) {
  let items = svg.getItems({recursive: true});
  items.forEach(function (item) {
    // Fix transformation and rotation
    item.transformContent = false;
    // Save original position:
    item.origin = item.position;
    // Image position fix:
    if (item.className == 'Raster') {
      item.position.x /= 2;
      item.position.y /= 2;
    }
  });
}

// Easy access to svg children e.g. layer('dog')
// with caching
let layersCache = {};

function layer(name) {
  if (!layersCache[name]) {
    layersCache[name] = paper.view.svg.getItem({name: name});
  }
  return layersCache[name];
}


// Init and bind callbacks
function startProject() {
  // Bind vertical mouse drag to fake remote data
  paper.view.onMouseDrag = function (event) {
    let h = paper.view.size.height;
    let y = event.point.y;
    let pad = .15; // Padding (in percent) from screen top and bottom
    let val = (y - h * pad * 2) / (h - h * pad * 2) + pad;
    remoteValue = Math.max(0, Math.min(1, val));
  };

  // Hotkeys
  paper.view.onKeyUp = function (event) {
    // Fullscreen
    if (event.key == 'f') {
      document.documentElement.webkitRequestFullscreen();
    }
  };

  // Smooth data
  let g = new paper.Group();
  g.onFrame = function (event) {
    data.value += (remoteValue - data.value) * 0.2;
  }
}


// Bootstraping
window.onload = function () {
  if (paper.project.svgName) {
    loadSVG(paper.project.svgName);
  }
  startProject();
};


// Remote data:

let remoteValue = 0.5; // Raw
let socket;
let socketOptions = {
  reconnection: false
}

if (connect) {
  if (!isRunningOnHost())
    socket = io(`http://${masterHost}:3000`, socketOptions);
  else
    socket = io(socketOptions);

  socket.on('data', function (value) {
    remoteValue = value;
    if (paper.onData) {
      paper.onData(value);
    }
  });

  socket.on('connect_error', function (err) {
    // handle server error here
    console.log('Error connecting to server');
  });
}

function isRunningOnHost() {
  return window.location.hostname != '127.0.0.1';
}