
project.svgName = 'design.svg';

project.svgReady = function () {
    
    var yoyo1 = new Yoyo(-90, 180);
    var loop1 = new Loop(100, 200);
    
    view.onFrame = function () {
        yoyo1.to = data * 180;
        yoyo1.step();
        layer('cat').rotation = yoyo1.value;

        layer('text').position.y = layer('text').origin.y + interpolate(0, 100, data);
    
//        loop1.speed = data * 20;
//        loop1.step();
//        layer('text').position.y = layer('text').origin.y + loop1.value;
//
//        layer('text').position.y = layer('text').origin.y + interpolate(0, 100, data);
    }
}