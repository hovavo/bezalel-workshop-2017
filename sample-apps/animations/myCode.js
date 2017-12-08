
project.svgName = 'design.svg';

project.svgReady = function () {

    var anim1 = new Yoyo(-200, 200);
    var anim2 = new Loop(-200, 200);
    var anim3 = new Yoyo();
    
    view.onFrame = function () {
        anim1.speed = data.mapBetween(0.2, 1);
        layer('cat1').relativePosition.y = anim1.step();
        
        anim2.speed = data.mapBetween(0.2, 1);
        layer('cat2').relativePosition.y = anim2.step();
        
        anim3.from = data.mapBetween(-30, -90);
        anim3.to = data.mapBetween(30, 90);
        layer('cat3').rotation = anim3.step();
    }
}