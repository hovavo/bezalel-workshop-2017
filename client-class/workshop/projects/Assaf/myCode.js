project.svgName = 'design.svg';

var mem;
var nodes = [];
var bg = new Shape.Rectangle(view.bounds);
bg.fillColor = 'white';

var groupMask = new Group();
var maskCenter;


project.svgReady = function () {

  mem = layer('mem');
  mem.transformContent = false;
  mem.pivot = new Point(960, 707.518);
  groupMask.addChild(mem);
  groupMask.clipped = true;

  view.onFrame = function () {
    mem.relativePosition.x = input.mapBetween(0, -2000);
    mem.rotation = input.mapBetween(0, 180);
    mem.scaling = input.mapBetween(1, 20);
    cnt++;

    if (cnt >= (180 / input.mapBetween(1, 4))) {
      cnt = 0;
      removeAllNodes();
    }

    var start = new Date().getTime();

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].update(i);
    }

    while (nodes.length < nodeNum) {
      createNode();
      // var now = new Date().getTime();
      //
      // if (now - start > 10) {
      //   break;
      // }
    }
  }

  setup();
}
paper.settings.applyMatrix = false;

var baseR;
var cnt = 0;
var areaRadius = (view.size.height / 2) * 2.2;
var nodeNum = (areaRadius * 1.3 | 0);

var Node = function (position, radius) {
  this.position = position;
  this.radius = radius;
  this.setRadius()
};

Node.prototype.setRadius = function (radius) {
  this.path = new Path.Circle(this.position, this.radius);
  groupMask.addChild(this.path);
  this.scaling = 0.1;
  this.path.scaling = this.scaling;

  var range = {
    "hue": 30,
    "saturation": 0.3,
    "brightness": 0.2
  }

  var red = 236 / 255;
  var green = 61 / 255;
  var blue = 242 / 255;

  var color = new Color(red, green, blue);

  color.hue += (Math.random() * range.hue * 2 - range.hue / 2);
  color.saturation += (Math.random() * range.saturation);
  color.brightness += (Math.random() * range.brightness * 2 - range.brightness);
  this.path.fillColor = color;
};

Node.prototype.update = function (index) {
  this.scaling = this.scaling + (1 - this.scaling) * 0.1;
  this.path.scaling = this.scaling;
}

Node.prototype.kill = function () {
  if (this.path) {
    this.path.remove();
  }
}

function setup() {
  reset();
}

function reset() {
  var w = view.size.width;
  var h = view.size.height;
  var diagonalLineLength = Math.sqrt(w * w + h * h);
  baseR = diagonalLineLength * 0.15 * (Math.random() * 2.5 + 0.5);
}

function removeAllNodes() {
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].kill();
  }
  ;

  nodes = [];
}

function createNode() {
  reset();
  var randomPoint = new Point(Math.random() * view.size.width, Math.random() * view.size.height);
  var center = new Point(view.size.width / 2, view.size.height / 2);
  var dv = (randomPoint - center).normalize() * Math.random() * areaRadius;
  randomPoint = center + dv;

  var maxR = Number.POSITIVE_INFINITY;
  var isCorrectCircle = false;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var directionVector = randomPoint - node.position;
    var directionVectorLength = directionVector.length;

    if (directionVectorLength < node.radius) {
      break;
    } else {
      if (directionVectorLength >= node.radius && directionVectorLength - node.radius < maxR) {
        maxR = directionVectorLength - node.radius;
      }
    }

    if (i == nodes.length - 1) {
      // console.log("found");
      isCorrectCircle = true;
    }
  }

  if (nodes.length == 0) {
    var firstNode = new Node(randomPoint, 10);

    nodes.push(firstNode);
  } else {
    var r = getRadiusInCircle(randomPoint, maxR);

    if (maxR != Number.POSITIVE_INFINITY && isCorrectCircle && r > 3) {
      var latestNode = new Node(randomPoint, r);

      nodes.push(latestNode);
    }
  }
}

function getRadiusInCircle(randomPoint, radius) {
  var sw = view.size.width;
  var sh = view.size.height;
  var center = new Point(sw / 2, sh / 2);
  var distanceToEdge = areaRadius - (randomPoint - center).length;

  return Math.min(radius, distanceToEdge);
}

