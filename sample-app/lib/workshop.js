
// Paper extensions:

// Base driver animations
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
        // TODO: Limit by to and from
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
    step () {
        let diff = this.to - this.from;
        let dir = (diff < 0) ? -1 : 1;
        this._value = this.from + ((this._value + this.speed * dir - this.from) % diff);
    }    
}


// 0-1 Interpolation  
function interpolate(from, to, step) {
    return from + ((to - from) * step);
}


// TODO: Random animaiton driver (perlin noise)


// Easy random fuctions:
function randomNumber(max) {
    return Math.random() * max;
}

function randomPoint(max) {
    return new paper.Point({x: randomNumber(max),
                            y: randomNumber(max)});
}


// Improved SVG loading 
function loadSVG(path) {
    paper.project.importSVG(paper.project.svgName, function (svg) {
            fixSVG(svg);
            paper.view.svg = svg;
            if (paper.project.svgReady) 
                paper.project.svgReady();
        });
}   


// Handle some paperjs glitches
function fixSVG(svg) {
    // Fix group transform
    let groups = svg.getItems({className: "Group"});
    groups.forEach(function (group) {
        group.transformContent = false;
    });
    
    // Image position fix:
    let images = svg.getItems({className: "Raster"});
    images.forEach(function (image) {
        image.position.x /= 2;
        image.position.y /= 2;
        image.transformContent = false;
    });
}


// Easy access to svg children e.g. layer('dog')
// with caching
let layersCache = {};
function layer(name) {
    if (!layersCache[name]) {
        layersCache[name] = paper.view.svg.getItem({name: name});
        layersCache[name].origin = layersCache[name].position;
    }
    return layersCache[name];
}


// Init and bind callbacks
function startProject() {
    // Bind mouse drag to fake remote data
    paper.view.onMouseDrag = function(event) {
        remoteValue = event.point.y / paper.view.size.height;
    };
    
    // Smooth data
    let g = new paper.Group();
    g.onFrame = function(event) {
        data += (remoteValue - data) / 2;
    }
}


// Bootstraping
window.onload = function () {
    if (paper.project.svgName) {
        loadSVG(paper.project.svgName);
    }
    startProject();
}


// Remote data:

let data = 0.5; // To be used by the students (smoothed)
let remoteValue = 0.5; // Raw

let socket = io('http://localhost:3000');

socket.on('data', function (value) {
    remoteValue = value;
    if (paper.onData) {
        paper.onData(value);
    }
});
