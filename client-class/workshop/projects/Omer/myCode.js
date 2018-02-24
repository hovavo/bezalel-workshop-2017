project.svgName = 'snake.svg';

// The amount of points in the path:
var points = 5;
var amount = 15;
// The distance between the points:
var length = 5;
var height = 500;
//var path;
var instrument;
var time = 6;

project.svgReady = function () {


//    path = layer('path');

  var snake = layer('snake')._children[2];
  var instrument = layer('instrument');
  var snake_x = snake.position.x;
  var snake_y = snake.position.y;
  console.log(snake);
  console.log(layer('snake'));

  view.onFrame = function (event) {


    // console.log(event.time - time)
    time += 0.016;

//        layer('instrument').position.x += randomNumber(2, -2);
//        layer('instrument').position.y += randomNumber(2, -2);
    layer('snake').position.y = input.mapBetween(450, 1100);
    layer('instrument').position.y = input.mapBetween(-350, 200);


    for (var i = 0; i <= amount; i++) {
      var segment = snake.segments[i];

      // A cylic value between -1 and 1
      var sinus = Math.sin(time * 3);
      var sinus2 = Math.sin(time * 4);

      // Change the y position of the segment point:
      if ((i < 3 || i > 8) && i != 9 && i != 8) {
        segment.point.y = segment.point.y + sinus2 * 2;

      } else if (i == 9 || i == 8 || i == 10) {
        segment.point.y = segment.point.y + sinus2 * 2;

      } else {
        segment.point.y = segment.point.y + sinus;
        segment.point.x = segment.point.x + sinus2 * 1.5;
        for (var j = 0; j < 5; j++) {
          if (j != 2) {
            layer('snake')._children[j].position.x = layer('snake')._children[j].position.x + (sinus2 / 4);
            layer('snake')._children[j].position.y = layer('snake')._children[j].position.y + (sinus / 5);
//                        layer('snake')._children[j].position.y = layer('snake')._children[j].position.y + sinus;
          }
        }
      }

//            segment.point.x = snake_x + sinus*5;
    }

//        for (var i = 0; i <= amount; i=i+2) {
//            var segment = snake.segments[i];

    // A cylic value between -1 and 1
    var sinus = Math.sin(time * 3);

    // Change the y position of the segment point:
    instrument.position.y = instrument.position.y + sinus * 2;
    instrument.position.x = instrument.position.x + sinus2 * 2;
//            segment.point.x = snake_x + sinus*5;
//        }
  }

}


