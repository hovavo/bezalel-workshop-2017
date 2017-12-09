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
    this._item.position = this._item.origin.add(this._p);
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
  },
    relativeRotation: {
    set(value) {
      this.rotation = this.originalRotation + value;
    },

    get() {
      return this.rotation - this.originalRotation;
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

  get value() {
    return this._value;
  }
}

// Driver for back and forth animations
class Yoyo extends Animation {
  step(speed) {
    if (speed)
      this.speed = speed;
    let diff = this.to - this.from;
    this._step += this.speed / 10;
    this._value = this.from + Math.sin(this._step) * diff * 0.5 + diff * 0.5;
    return this.value;
  }
}

// Driver for loop animations
class Loop extends Animation {
  step(speed) {
    if (speed)
      this.speed = speed;
    let diff = this.to - this.from;
    let dir = (diff < 0) ? -1 : 1;
    this._value = this.from + ((this._value + this.speed * dir * 10 - this.from) % diff);
    return this.value;
  }
}

// Driver for Either animations
class Either extends Animation {
  step(speed) {
    if (speed)
      this.speed = speed;
    this._step += this.speed / 10;
    if (this.speed > 0.01)
      this._value = (this._step % 1) < 0.5 ? this.from : this.to;
    else
      this._value = this.to;
    return this.value;
  }
}

// Expose data and data utilities:
let input = {
  value: 0.5,
  mapBetween(from, to) {
    return between(from, to, this.value);
  },
  mapBetweenPositive(from, to) {
    return Math.abs(between(from, to, this.value));
  },
  isBetween(a, b, value = this.value) {
    let low = Math.min(a, b);
    let high = Math.max(a, b);
    return (this.value >= low && this.value < high);
  }
};

// 0-1 Interpolation
function between(from, to, step) {
  return from + ((to - from) * step);
}


// TODO: Random animation driver (perlin noise)


// Easy random fuctions:
function randomNumber(to = 1, from = 0) {
  return Math.random() * (to - from) + from;
}


// Improved SVG loading 
function loadSVG() {
  paper.project.importSVG(paper.project.svgName, function (svg) {
    svg.opacity = 0;
    fixSVG(svg);
    paper.view.svg = svg;
    if (paper.project.svgReady)
      setTimeout(function () {
        svg.opacity = 1;
        paper.project.svgReady();
      }, 200);
  });
}


// Handle some paperjs glitches
function fixSVG(svg) {
  let items = svg.getItems({recursive: true});
  items.forEach(function (item) {
    // Fix transformation and rotation
    item.transformContent = false;
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
    // Save original properties:
    layersCache[name].origin = layersCache[name].position;
    layersCache[name].originalRotation = layersCache[name].rotation;
  }
  return layersCache[name];
}


// Init and bind callbacks
function startProject() {
  // Bind vertical mouse drag to fake remote data
  let prevDragCallback = paper.view.onMouseDrag;
  paper.view.onMouseDrag = function (event) {
    let h = paper.view.size.height;
    let y = event.point.y;
    let pad = .15; // Padding (in percent) from screen top and bottom
    let val = (y - h * pad * 2) / (h - h * pad * 2) + pad;
    remoteValue = Math.max(0, Math.min(1, val));
    if (prevDragCallback) {
      prevDragCallback(event);
    }
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
    input.value += (remoteValue - input.value) * 0.2;
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