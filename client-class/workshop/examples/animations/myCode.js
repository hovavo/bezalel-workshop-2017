
project.svgName = 'design.svg';

project.svgReady = function () {

    var anim1 = new Yoyo(-200, 200);
    var anim2 = new Loop(-200, 200);
    var anim3 = new Yoyo(0, 1);
    var anim4 = new Either(0, 1);
    
    view.onFrame = function () {
        anim1.speed = input.mapBetween(0.2, 1);
        layer('cat1').relativePosition.y = anim1.step();
        
        anim2.speed = input.mapBetween(0.2, 1);
        layer('cat2').relativePosition.y = anim2.step();
        
        anim3.from = input.mapBetween(-30, -90);
        anim3.to = input.mapBetween(30, 90);
        layer('cat3').rotation = anim3.step();
        
        anim4.speed = input.value;
        layer('cat4').opacity = anim4.step();
    }
}