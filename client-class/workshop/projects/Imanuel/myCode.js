project.svgName = 'design.svg';

project.svgReady = function () {

    // A place for code that should happen 
    // once the design is loaded
    var yoyo1 = new Yoyo(1 , 5 , 3)
    var yoyo2 = new Yoyo(0.7 , 5 , 5.5)
    var yoyo3 = new Yoyo(0.7 , 3 , 2)
    var yoyo4 = new Yoyo(0.3 , 4 , 1)
    var yoyo5 = new Yoyo(1.2 , 5.5 , 1)
    var yoyo6 = new Yoyo(1.5 , 2 , 3)
    view.onFrame = function () {
        
        // A place for code that should
        // repeat on every frame 
        layer('spiral').rotation += 0.6
        layer('spiral2').rotation -= 0.4
        
        yoyo1.step();
        layer('zain31').rotation = yoyo1.value;
        layer('zain31').relativePosition.y = input.mapBetween(0, 50);
        layer('zain31').relativePosition.x = input.mapBetween(0, 450);
        layer('zain31').rotation = input.mapBetween(360, 0);
        layer('zain31').rotation = input.mapBetween(0, 400);
        
        yoyo2.step();
        layer('zain41').rotation = yoyo2.value;
        layer('zain41').relativePosition.y = input.mapBetween(0, 275);
        layer('zain41').relativePosition.x = input.mapBetween(0, -550);
        layer('zain41').rotation = input.mapBetween(360, 0);
        layer('zain41').rotation = input.mapBetween(0, 360);
        
        yoyo3.step();
        layer('zain21').rotation = yoyo3.value;
        layer('zain21').relativePosition.y = input.mapBetween(0, -175);
        layer('zain21').relativePosition.x = input.mapBetween(0, -360);
        layer('zain21').rotation = input.mapBetween(360, 0);
        layer('zain21').rotation = input.mapBetween(0, 400);
        
        yoyo4.step();
        layer('zain11').rotation = yoyo4.value;
        layer('zain11').relativePosition.y = input.mapBetween(0, -300);
        layer('zain11').relativePosition.x = input.mapBetween(0, 100);
        layer('zain11').rotation = input.mapBetween(360, 0);
        layer('zain11').rotation = input.mapBetween(0, 450);
        
        yoyo5.step();
        layer('zain61').rotation = yoyo5.value;
        layer('zain61').relativePosition.y = input.mapBetween(0, 20);
        layer('zain61').relativePosition.x = input.mapBetween(0, 400);
        layer('zain61').rotation = input.mapBetween(360, 0);
        layer('zain61').rotation = input.mapBetween(0, 360);
        
        yoyo6.step();
        layer('zain51').rotation = yoyo6.value;
        layer('zain51').relativePosition.y = input.mapBetween(0, 50);
        layer('zain51').relativePosition.x = input.mapBetween(0, -400);
        layer('zain51').rotation = input.mapBetween(360, 0);
        layer('zain51').rotation = input.mapBetween(0, 280);
        
        
        
        
        
        
        
    }
}