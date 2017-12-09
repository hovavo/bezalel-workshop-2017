project.currentStyle.strokeColor = 'black';
project.currentStyle.strokeWidth = 2;

var igul = new Shape.Circle();
igul.position = view.center;
igul.radius = 30;

view.onFrame = function(event) {
    igul.position.x += 10;
    igul.position.y += 2;
    
    if (igul.position.x > view.size.width) {
        igul.position.x = 0;
    }
    
    if (igul.position.y > view.size.height) {
        igul.position.y = 0;
    }
}