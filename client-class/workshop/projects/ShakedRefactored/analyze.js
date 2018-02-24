var dataArray
var analyser
var all = []

/**
 * initialize the sound stream analyser
 * implemented by the Web Audio API
 * @return {None} returns nothing
 */
function initSoundStream() {

  // initialize and load audio context, HTMLElement
  // audio file and analyser node
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  var soundFile = document.querySelector('audio');
  analyser = audioCtx.createAnalyser();

  // set music to loop
  soundFile.loop = true;

  // configure the analyser and output buffer
  analyser.fftSize = 128;
  var bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  // hook up the source node, input and analyse nodes together
  var audioSourceNode = audioCtx.createMediaElementSource(soundFile);
  audioSourceNode.connect(analyser);
  analyser.connect(audioCtx.destination);

  // play the music. has to be playing in
  // order for the analyser to fetch data
  soundFile.currentTime = 120;
  soundFile.play();

  getSpectrumFrame();
}

/**
 * fetch the byte data from and analyser stream and
 * return the output buffer of the reply
 * @return {Array(Int8)} the analysis output buffer containing frequency data
 */
function getSpectrumFrame() {
  analyser.getByteFrequencyData(dataArray);
  all.push(Array.from(dataArray))
  if (all.length == 2000)
    console.log(JSON.stringify(all));
  requestAnimationFrame(getSpectrumFrame);
}

window.onload = initSoundStream;
