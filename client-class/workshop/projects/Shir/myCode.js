project.svgName = 'Lamedsvg2.svg'; 

project.svgReady = function () {
  
    var anim1 = new Yoyo(-5, 5);
    var anim2 = new Yoyo(1, 0.9);
    var anim3 = new Yoyo(1, 1.1);
    var anim4 = new Either(0, 1);
    
    view.onFrame = function () {

        // lamed animation
        layer('lamedupper').relativePosition.x = input.mapBetween(0, 1000);
        layer('lamedupper').relativePosition.y = input.mapBetween(0, -800);
        layer('lamedupper').rotation = input.mapBetween(0, 135);
                
        layer('lamedmiddle1').rotation = input.mapBetween(0, 75);
        layer('lamedmiddle1').relativePosition.x = input.mapBetween(0, 1000);
        layer('lamedmiddle1').relativePosition.y = input.mapBetween(0, -137);
        
        layer('lamedmiddle2').rotation = input.mapBetween(0, 150);
        layer('lamedmiddle2').relativePosition.x = input.mapBetween(0, -1400);
        layer('lamedmiddle2').relativePosition.y = input.mapBetween(0, 200);
        
         layer('lamedbottom').rotation = input.mapBetween(0, 250);
        layer('lamedbottom').relativePosition.x = input.mapBetween(0, -800);
        layer('lamedbottom').relativePosition.y = input.mapBetween(0, 400);
        
        // stone animation
        
        anim1.step();
        anim3.step();
       anim3.speed = 0.5;
       layer('stone1').scaling = anim3.value;
        layer('stone3').scaling = anim3.value;
        layer('stone5').scaling = anim3.value;
        layer('stone5').rotation = anim1.value;
        layer('stone7').scaling = anim3.value;
         layer('stone7').rotation = anim1.value;
        layer('stone9').scaling = anim3.value;
        layer('stone11').scaling = anim3.value;
        
        anim2.step();
         anim2.speed = 0.5;
       layer('stone2').scaling = anim2.value;
        layer('stone4').scaling = anim2.value;
        layer('stone6').scaling = anim2.value;
        layer('stone8').scaling = anim2.value;
        layer('stone10').scaling = anim2.value;
        
}
    
}