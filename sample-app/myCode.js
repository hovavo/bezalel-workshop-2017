
project.svgName = 'design.svg';

var yoyo1 = new Yoyo(180);
var loop1 = new Loop(200);

// Anything you need to do once the design was loaded
project.setup = function () {
    // Your code here
}

// Anything you need to do on every frame
project.step = function () {
    yoyo1.max = data * 180;
    layer('cat').rotation = yoyo1.value;
    
    loop1.speed = data * 20;
    layer('text').position.y = loop1.value;
}
