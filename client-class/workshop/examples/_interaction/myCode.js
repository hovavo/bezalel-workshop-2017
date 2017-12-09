project.currentStyle.strokeColor = 'black';
project.currentStyle.strokeWidth = 2;

var igul = new Shape.Circle();
igul.position = view.center;
igul.radius = 30;

view.onMouseDrag = function(event) {
    igul.position = event.point;
    
    var igul2 = new Shape.Circle();
    igul2.position = event.point;
    igul2.radius = randomNumber(10, 2);
}