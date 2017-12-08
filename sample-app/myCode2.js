
project.svgName = 'design2.svg';

project.svgReady = function () {
    
    var yoyo1 = new Yoyo(0, 0);
    var loop1 = new Loop(0, 360);
    
    view.onFrame = function () {
        loop1.speed = data.value * 10;
        loop1.step();
        layer('cat').rotation = loop1.value;

        layer('text').position.x = data.mapBetween(0, 500);
        
        layer('text').fillColor.brightness = data.mapBetween(0, 0.5);
        layer('text').fillColor.saturation = data.mapBetween(0, 1);
        layer('text').fillColor.hue = data.mapBetween(0, 50);
    
//        loop1.speed = data * 20;
//        loop1.step();
    }
}