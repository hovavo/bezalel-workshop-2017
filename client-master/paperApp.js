

project.currentStyle.strokeWidth = 5;
project.currentStyle.strokeColor = 'red';
project.currentStyle.fillColor = 'white';

var track = new Path([view.bounds.leftCenter, view.bounds.rightCenter]);
var value = 0.5;
var pointer;

function onMouseDrag(event) {
  value = event.point.y / view.size.height;
  socket.emit('data', value);
  track.position.y = event.point.y;
  if (pointer) {
    pointer.position.y = event.point.y;
  }
}

function onResize() {
  track.segments[1].point.x = view.size.width;
  if (pointer) {
    pointer.position.x = view.center.x;
  }
}


project.importSVG('assets/pointer.svg', function (svg) {
  pointer = svg;
  pointer.pivot = [30, 55];
  pointer.position.x = view.center.x;
  pointer.position.y = view.center.y;
})

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