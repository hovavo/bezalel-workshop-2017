
// Paper extensions:

var yoyoVal = 0;
var loopVal = 0;


function yoyo(max, speed = 0.5) {
    yoyoVal += speed / 10;
    return Math.sin(yoyoVal) * max * 0.5 + max * 0.5;
}

function loop(max, speed = 0.5) {
    loopVal += speed / 10;
    return loopVal % max;
}

function randomNumber(max) {
    return Math.random() * max;
}

function randomPoint(max) {
    return new paper.Point({x: randomNumber(max),
                            y: randomNumber(max)});
}

// TODO: Smooth data


// Improved SVG loading 
function loadSVG(path, callback) {
    paper.project.importSVG(paper.project.svgName, function (svg) {
            fixSVG(svg);
            paper.project.svg = svg;
            callback();
        });
}   

// Handle some paperjs glitches
function fixSVG(svg) {
    // Fix group transform
    var groups = svg.getItems({className: "Group"});
    groups.forEach(function (group) {
        group.transformContent = false;
    });
    
    // Image position fix:
    var images = svg.getItems({className: "Raster"});
    images.forEach(function (image) {
        image.position.x /= 2;
        image.position.y /= 2;
        image.transformContent = false;
    });
}


// Easy access to svg children e.g. layer('dog')
// with caching
var layersCache = {};
function layer(name) {
    if (!layersCache[name])
        layersCache[name] = paper.project.svg.getItem({name: name});
    return layersCache[name];
}


// Bootstraping
function startProject () {
    // Exec setup func
    paper.project.setup();
    
    // Bind frame event to step func
    paper.view.onFrame = function (event) {
        smoothData();
        paper.project.step();
    }
}

window.onload = function () {
    if (paper.project.svgName) {
        loadSVG(paper.project.svgName, startProject);
    }
    else {
        startProject();
    }
}


// Remote data:

var data = 0.5; // To be used by the students (smoothed)
var remoteValue = 0.5; // Raw

var socket = io('http://localhost:3000');

socket.on('data', function (value) {
    remoteValue = value;
    if (paper.onData) {
        paper.onData(value);
    }
});

function smoothData() {
    data += (remoteValue - data) / 2;
}