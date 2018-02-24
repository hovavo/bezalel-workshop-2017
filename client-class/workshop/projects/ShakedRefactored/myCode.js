var bg = new Shape.Rectangle(view.size);
bg.fillColor = 'white';

var PATH_DIVISION = 30
var FFT_SIZE = 60
var GAIN_MULTIPLIER = 200
var SCREEN_OFFSET = 0
var STEP_SIZE
var FREQ_OFFSET
var cutoff

// console.log(JSON.stringify(window.soundFrames.map(function (frame) {
//   var newFrame = [];
//   for (var i in frame) {
//     newFrame[Number(i)] = frame[i]
//   }
//   return newFrame;
// })));

STEP_SIZE = view.size.width / PATH_DIVISION
FREQ_OFFSET = view.size.height / FFT_SIZE

// load letter SVG and configure the letter parameters
var letter = paper.project.importSVG('Layer_1');
letter.position.y = view.center.y + 20
letter.scaling = 1.5
letter.opacity = 0.0

// initialize paths array and path configuration
var paths = new Array(FFT_SIZE)
for (var index = 0; index < FFT_SIZE; index++) {
  paths[index] = new Path()
  paths[index].smooth('continuous')
  paths[index].strokeColor = 'black';
  paths[index].strokeWidth = 2;
}


function modulateStream(input) {
  var normalized = input / 255
  var cannonical = normalized - 0.5
  var multiplied = cannonical * GAIN_MULTIPLIER
  // var exponented = Math.pow(3, multiplied)
  return multiplied
}

function updateFrequency(path, frequencyFrame, index) {

  // performs modulation on the frequency frame, such as normalizing
  var frequencyGain = modulateStream(frequencyFrame)

  // if the path is full (full screen), remove the
  // First-In and reposition the line
  if (path.segments.length > PATH_DIVISION) {
    path.firstSegment.remove()
    path.position.x -= STEP_SIZE
  }

  // add a new point to path
  path.add(new Point(
    // X position is defined by the length of the list or
    // max list size times the step size (number of point in line)
    Math.max(path.segments.length, PATH_DIVISION) * STEP_SIZE,

    // Y position is defined by the frequency channel
    // gain with the frequency index times the margin
    // between frequency draw
    frequencyGain + FREQ_OFFSET * index + SCREEN_OFFSET
  ))
  path.lastSegment.point.originalHeight = path.lastSegment.point.y
  path.lastSegment.point.originalWidth = path.lastSegment.point.x
}

function letterPass(path, letter) {
  for (var segmentIndex = path.segments.length - 1; segmentIndex >= 0; segmentIndex--) {
    var pathPoint = path.segments[segmentIndex].point
    var closestPoint = letter.children[1].getNearestLocation(pathPoint)

    // interpolate the point height to the nearest point on the letter
    // if the point is contained in the letter(creating white space)
    pathPoint.y = letter.children[1].contains(pathPoint) ?
      (cutoff * pathPoint.originalHeight) + ((1 - cutoff) * closestPoint.point.y) :
      pathPoint.originalHeight

  }
  path.smooth('continuous')
}

var frame = 0;
view.onFrame = function () {

  cutoff = input.value;

  if (frame > soundFrames.length - 1)
    return;


  var spectrumFrame = window.soundFrames[Math.floor(frame)];
  frame += 0.5;

  // evaluate and set a modulated stroke width by wave gain
  var waveGain = spectrumFrame.reduce(function (a, b) {
    return a + b
  }) / FFT_SIZE / 255;


  var modulatedWidth = Math.max(Math.pow(waveGain + 1, 3) - 2, 0.5)

  // iterate and update paths
  for (var pathIndex = 0; pathIndex < FFT_SIZE; pathIndex++) {
    paths[pathIndex].strokeWidth = modulatedWidth;
    updateFrequency(paths[pathIndex], spectrumFrame[pathIndex], pathIndex)
    letterPass(paths[pathIndex], letter)
  }

}

// view.onMouseMove = function (event) {
//   cutoff = (event.point.y / view.size.height)
// }
