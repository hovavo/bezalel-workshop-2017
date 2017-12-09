
project.svgName = 'design.svg';

project.svgReady = function () {

    var anim1 = new Yoyo(-200, 200);
    var anim2 = new Yoyo(0, 1);
    var anim3 = new Loop(-200, 200);
    var anim4 = new Either(0, 1);
    
    view.onFrame = function () {
        
        // We can change the animation speed based on the input 
        anim1.speed = input.mapBetween(0.2, 1);
        anim1.step();
        layer('cat1').relativePosition.y = anim1.value;
        
        // We can change the range of numbers for the animations
        anim2.from = input.mapBetween(-30, -90);
        anim2.to = input.mapBetween(30, 90);
        anim2.step();
        layer('cat2').rotation = anim2.value;
        
        anim3.speed = input.mapBetween(0.2, 1);
        anim3.step();
        layer('cat3').relativePosition.y = anim3.value;
        
        anim4.speed = input.mapBetween(0, 1);
        anim4.step();
        layer('cat4').opacity = anim4.value;
    }
}