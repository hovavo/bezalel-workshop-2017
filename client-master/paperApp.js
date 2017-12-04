project.currentStyle.strokeWidth = 2;
project.currentStyle.strokeColor = 'red';
project.currentStyle.fillColor = 'white';

var track = new Path([view.bounds.leftCenter, view.bounds.rightCenter]);
var el = new Shape.Circle(view.center, 50);
// var value = 0.5;

// function onMouseMove(event) {
//   value = event.point.x / view.size.width;
//   socket.emit('data', value);
//   el.position.x = event.point.x;
// }

function onResize(event) {
  track.segments = [view.bounds.leftCenter, view.bounds.rightCenter];
  el.position.y = view.center.y;
}

Leap.loop(function(frame){
  if (frame.hands.length) {
    var val = frame.hands[0].palmPosition[1] / 400;
    el.position.x = val * view.size.width;
    socket.emit('data', val);
  }
});