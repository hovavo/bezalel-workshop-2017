project.svgName = 't.svg';

project.svgReady = function () {

    var yoyoTof = new Yoyo(-30, 30, 200);
    var yoyoTof2 = new Yoyo(-10, 10, 200);
    var yoyoTof3 = new Yoyo(-10, 10, 200);
    var yoyoRight = new Yoyo(-10, 10, 100);
    var yoyoLeft = new Yoyo(-10, 10, 100);
    layer('left').pivot = new Point(246,300);
    layer('right').pivot = new Point(1185,290);
    var yoyoTaf = new Yoyo (30, -30, 400);
    var loopPink1 = new Loop(-70, 1000);
    var loopPink2 = new Loop(-400, 1000);
    var loopPink3 = new Loop(-200, 1000);
    var loopPink4 = new Loop(-300, 1000);
    var loopPink5 = new Loop(-50, 1000);
    var loopPink6 = new Loop(-600, 1000);
    
    var looprotate1 = new Loop (0, 180, 1);
    var looprotate2 = new Loop (0, 360);
    var looprotate3 = new Loop (0, -360);
    var looprotate4 = new Loop (0, 180, 1);
    var looprotate5 = new Loop (0, 360);
    var looprotate6 = new Loop (0, -360);
    
    var yoyoscale1 = new Yoyo (0.00005, 1, 0.5)
    var yoyoscale2 = new Yoyo (0.00005, 1.5, 0.6)
    var yoyoscale3 = new Yoyo (0.00005, 1, 0.8)
    var yoyoscale4 = new Yoyo (0.00005, 1.5, 0.6)
    var yoyoscale5 = new Yoyo (0.00005, 1, 0.8)
    var yoyoscale6 = new Yoyo (0.00005, 1, 0.5)
    
    var yoyobeten = new Yoyo (10, -10)
    var yoyoTaf1 = new Yoyo(-10, 10, 1000);
    var yoyoTaf2 = new Yoyo(-20, 20, 1000);
    
    
    view.onFrame = function () {
        
        // A place for code that should
        // repeat on every frame 
        
        yoyoTof.from = input.mapBetween(0, -30);
        yoyoTof.to = input.mapBetween(0, 30);
        yoyoTof.step();
        layer('tof').relativePosition.x = yoyoTof.value;
        
        yoyoTof2.from = input.mapBetween(0, -30);
        yoyoTof2.to = input.mapBetween(0, 30);
        yoyoTof2.step();
        layer('tof2').relativePosition.x = yoyoTof2.value;
        layer('tof2').relativePosition.y = yoyoTof2.value;
        
        yoyoTof3.from = input.mapBetween(0, 30);
        yoyoTof3.to = input.mapBetween(0, -30);
        yoyoTof3.step();
        layer('tof3').relativePosition.x = yoyoTof3.value;
        layer('tof3').relativePosition.y = yoyoTof3.value;
        
        yoyoTaf.from = input.mapBetween(0, -30);
        yoyoTaf.to = input.mapBetween(0, 30);
        yoyoTaf.step();
        layer('taf').relativePosition.x = yoyoTaf.value;
        
        yoyoRight.from = input.mapBetween(0, -30);
        yoyoRight.to = input.mapBetween(0, 30);
        yoyoRight.step();
        layer('right').relativeRotation = yoyoRight.value;
        
        // reset position otherwise it flys away
        //layer('right').relativePosition.x = 0;
        //layer('right').relativePosition.y = 0;
        
        yoyoLeft.step();
        layer('left').relativeRotation = yoyoRight.value;
        
        //layer('left').relativePosition.x = 0;
        //layer('left').relativePosition.y = 0;
        
        
        
        
        
        loopPink1.step();
        layer('pink1').relativePosition.y = loopPink1.value;
        
        loopPink2.step();
        layer('pink2').relativePosition.y = loopPink2.value;
        
        loopPink3.step();
        layer('pink3').relativePosition.y = loopPink3.value;
        
        loopPink4.step();
        layer('pink4').relativePosition.y = loopPink4.value;
        
        loopPink5.step();
        layer('pink5').relativePosition.y = loopPink5.value;
        
        loopPink6.step();
        layer('pink6').relativePosition.y = loopPink6.value;
        
        
        looprotate1.step();
        layer('pink1').relativeRotation = looprotate1.value;
        
        looprotate2.step();
        layer('pink2').relativeRotation = looprotate2.value;
       
        looprotate3.step();
        layer('pink3').relativeRotation = looprotate3.value;
        
        looprotate4.step();
        layer('pink4').relativeRotation = looprotate4.value;
        
        looprotate5.step();
        layer('pink5').relativeRotation = looprotate5.value;
       
        looprotate6.step();
        layer('pink6').relativeRotation = looprotate6.value;
        
        
        yoyoscale1.step();
        layer('pink1').scaling.x = yoyoscale1.value
        
        yoyoscale2.step();
        layer('pink2').scaling.x = yoyoscale2.value
        
        yoyoscale3.step();
        layer('pink3').scaling.x = yoyoscale3.value
        
        yoyoscale4.step();
        layer('pink4').scaling.x = yoyoscale4.value
        
        yoyoscale5.step();
        layer('pink5').scaling.x = yoyoscale5.value
        
        yoyoscale6.step();
        layer('pink6').scaling.x = yoyoscale6.value
        
        yoyobeten.step();
        layer('beten').relativePosition.x = yoyobeten.value
       
        yoyoTaf1.from = input.mapBetween(0, 30);
        yoyoTaf1.to = input.mapBetween(0, -30);
        yoyoTaf1.step();
        layer('taf1').relativeRotation = yoyoTaf1.value;
        layer('taf1').relativePosition.y = 0;
        layer('taf1').relativePosition.x = 0;
        
        yoyoTaf2.from = input.mapBetween(0, 30);
        yoyoTaf2.to = input.mapBetween(0, -30);
        yoyoTaf2.step();
        layer('taf2').relativePosition.x = yoyoTaf2.value;
        
    }
}