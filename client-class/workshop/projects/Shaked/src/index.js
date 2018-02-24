import paper from 'paper'
// import letterSVG from './images/letter.svg'
import {
  getSpectrumFrame,
  initSoundStream
} from './js/soundStream.js'
import io from 'socket.io-client'

// initialize paperjs as global scope over window
// see "using-javascript-directly" in the documentation
// for more information
paper.install(window);

// initialize the master server socket
let socket = io(`http://10.0.0.2:3000`, {
  reconnection: false
});

// define constants and global members
const PATH_DIVISION = 30
const FFT_SIZE = 60
const GAIN_MULTIPLIER = 200
const SCREEN_OFFSET = 15
let STEP_SIZE
let FREQ_OFFSET
let cutoff
let currentEmboss

/**
 * Modulation function for the audio stream,
 * performs both normalization and gain multiplication
 *
 * @param  {Int8} input  the audio byte-representation by frequency
 * @return {float}       interpolated value by frequency
 */
function modulateStream(input) {
  let normalized = input / 255
  let cannonical = normalized - 0.5
  let multiplied = cannonical * GAIN_MULTIPLIER
  // let exponented = Math.pow(3, multiplied)
  return multiplied
}

/**
 * Updates a specific path each frame.
 * This function is being called each frame on each
 * path representing each FFT frequency and updates the path
 * with new data.
 *
 * @param  {Path} path            Paper.js PAth object
 * @param  {float} frequencyFrame new frame information of frequency gain
 * @param  {int} index            index of path in frequency list
 * @return {None}                 returns nothing
 */
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
    let pathPoint = path.segments[segmentIndex].point
    let closestPoint = letter.children[1].getNearestLocation(pathPoint)

    // interpolate the point height to the nearest point on the letter
    // if the point is contained in the letter(creating white space)
    pathPoint.y = letter.children[1].contains(pathPoint) ?
    (cutoff * pathPoint.originalHeight) + ((1-cutoff) * closestPoint.point.y) :
    pathPoint.originalHeight

  }
  path.smooth('continuous')
}

// run paperjs scene on window load
window.onload = function() {

  // initialize the audio stream, paperjs canvas
  // and window related constants
  initSoundStream()
  paper.setup('myCanvas');
  STEP_SIZE = view.size.width / PATH_DIVISION
  FREQ_OFFSET = view.size.height / FFT_SIZE

  // load letter SVG and configure the letter parameters
  var letter = paper.project.importSVG(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 1280 800" style="enable-background:new 0 0 1280 800;" xml:space="preserve">
  <polygon points="794,363 794,246 486,246 486,363 728.4,363 728.4,370 680.1,370 680.1,432.2 599.9,432.2 599.9,412 486,412
  	486,482 599.9,482 599.9,432.3 680.1,432.3 680.1,463 728.4,463 728.4,470 680.1,470 680.1,523.2 599.9,523.2 599.9,489 486,489
  	486,554 599.9,554 599.9,523.3 680.1,523.3 680.1,554 794,554 794,470 728.4,470 728.4,463 794,463 794,370 728.4,370 728.4,363 "/>
  </svg>`)
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

  // on each frame, load spectrum frame
  // and update the frequency paths
  view.onFrame = function(event) {
    var spectrumFrame = getSpectrumFrame()

    // evaluate and set a modulated stroke width by wave gain
    var waveGain = spectrumFrame.reduce((a, b) => a + b) / FFT_SIZE / 255
    var modulatedWidth = Math.max(Math.pow(waveGain + 1, 3) - 2, 0.5)

    // iterate and update paths
    for (var pathIndex = 0; pathIndex < FFT_SIZE; pathIndex++) {
      paths[pathIndex].strokeWidth = modulatedWidth;
      updateFrequency(paths[pathIndex], spectrumFrame[pathIndex], pathIndex)
      letterPass(paths[pathIndex], letter)
    }
  }

  /**
   * mouse listener function, enables setting
   * letter cutoff from mouse position
   * @param  {MouseEvent} event mouse event details Object
   * @return {None}       returns nothing
   */
  view.onMouseMove = function(event) {
    cutoff = (event.point.y / view.size.height)
  }

  /**
   * data event socket listener
   * awaiting data from slider server and updates
   * the cutoff information accordingly with smoothing
   * @param  {float} value value of cutoff
   * @return {None}       returns nothing
   */
  socket.on('data', function (value) {
    cutoff += (value - cutoff) * 0.2
  });

  /**
   * socket error handler
   * @param  {ErrorObject} err error details object
   * @return {None}     returns nothing
   */
  socket.on('connect_error', function (err) {
    console.log('Error connecting to server');
  });

  // draw the scene
  view.draw();
}
