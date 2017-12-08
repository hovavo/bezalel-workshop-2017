
project.svgName = 'design2.svg';

project.svgReady = function () {
    
    var yoyo1 = new Yoyo(0, 0);
    var loop1 = new Loop(100, 200);
    
    view.onFrame = function () {
        yoyo1.to = data * 100;
        yoyo1.step();
        layer('cat').rotation = yoyo1.value;

        layer('text').position.x = layer('text').origin.x + interpolate(-100, 500, data);
        
        layer('text').fillColor.brightness = interpolate(0, 0.5, data);
        layer('text').fillColor.saturation = interpolate(0, 1, data);
        layer('text').fillColor.hue = interpolate(0, 50, data);
    
//        loop1.speed = data * 20;
//        loop1.step();
    }
}