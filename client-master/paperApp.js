var value = 0.5;
var pointer;
var log;

var track = new Path([
  view.bounds.leftCenter,
  view.bounds.rightCenter]);

track.strokeWidth = 5;
track.strokeColor = 'red';

function onMouseMove(event) {
  var h = paper.view.size.height;
  var pad = .10; // Padding (in percent) from screen top and bottom
  var padPx = h * pad;
  var diff = padPx * 2;
  var netH = h - diff;
  var y = event.point.y;
  value = (y - diff) / netH + pad;
  value = Math.max(0, Math.min(value, 1));
  // socket.emit('data', value);
  track.position.y = value * netH + padPx;
  if (pointer) {
    pointer.position.y = value * netH + padPx;
  }
}

function onResize() {
  track.segments[1].point.x = view.size.width;
  if (pointer) {
    pointer.position.x = view.center.x;
  }
}

function onFrame(event) {
  if (log && event.count % 2 == 0)
    log.push(value);
}

function onMouseDown(event) {
  if (log) {
    console.log(JSON.stringify(log));
  }
  else {
    log = [];
  }
}

project.importSVG('assets/pointer.svg', function (svg) {
  pointer = svg;
  pointer.pivot = [30, 65];
  pointer.position.x = view.center.x;
  pointer.position.y = view.center.y;
});


// Leap motion controller:

// var leapFrame = 0;
// var prevLeapVal = 0.5;
// var val = 0.5;
//
// Leap.loop(function(frame){
//   leapFrame++;
//   if ((leapFrame % 2 == 0) && frame.hands.length) {
//     val = frame.hands[0].palmPosition[1] / 400;
//     if (prevLeapVal != val) {
//
//       socket.emit('data', val);
//     }
//     prevLeapVal = val;
//   }
//   el.position.x += (val * view.size.width - el.position.x) * 0.2;
// });