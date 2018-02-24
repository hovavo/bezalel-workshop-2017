project.svgName = 'lamed3.svg';

project.svgReady = function ()
{
 
    // A place for code that should happen 
    // once the design is loaded
     var anim2 = new Yoyo(0, 180);
     var anim3 = new Yoyo (0,30);
    
     var anim4 = new Yoyo (-100,100);

    view.onFrame = function ()
    {
        // A place for code that should
        // repeat on every frame
        anim2.step();
        anim4.speed = 3;
        anim3.speed = 6;
        
        anim3.step();

        layer('yellow1').rotation = anim2.value;
        layer('yellow2').rotation = anim2.value * -1;
        layer('yellow3').rotation = anim2.value * 2;
        layer('yellow4').rotation = anim2.value * -5;
        layer('yellow5').rotation = anim2.value * 8;
        layer('yellow6').rotation = anim2.value * -3;
        layer('yellow7').rotation = anim2.value * -5;
        layer('yellow8').rotation = anim2.value * 6; 
        layer('yellow9').rotation = anim2.value * 4;
        layer('yellow10').rotation = anim2.value * 8;
        layer('yellow11').rotation = anim2.value * -1;
        layer('yellow12').rotation = anim2.value* 5;
        
        layer('orange1').rotation = anim3.value * -1;
        layer('orange2').rotation = anim3.value + anim4.value;
        layer('orange3').rotation = anim3.value;
        layer('orange4').rotation = anim3.value;
        layer('orange5').rotation = anim3.value;
        layer('orange6').rotation = anim3.value;
        layer('orange7').rotation = anim3.value;
        layer('orange8').rotation = anim3.value;
        layer('orange9').rotation = anim3.value;
        layer('orange10').rotation = anim3.value;
        
        
        layer('orange1').relativePosition.y = input.mapBetween(0 , 300);
        layer('orange1').relativePosition.x = input.mapBetween(0, 600);
        layer('orange2').relativePosition.y = input.mapBetween(0 , -800);
        layer('orange2').relativePosition.x = input.mapBetween(0, -600);
        layer('orange3').relativePosition.y = input.mapBetween(0 , -900);
        layer('orange3').relativePosition.x = input.mapBetween(0, 600);
        layer('orange4').relativePosition.y = input.mapBetween(0 , -900);
        layer('orange4').relativePosition.x = input.mapBetween(0, -1000);
        layer('orange5').relativePosition.y = input.mapBetween(0 , 2000);
        layer('orange5').relativePosition.x = input.mapBetween(0, -600);
        layer('orange6').relativePosition.y = input.mapBetween(0 , 2000);
        layer('orange6').relativePosition.x = input.mapBetween(0, 1500);
        layer('orange7').relativePosition.x = input.mapBetween(0, 800);
        layer('orange8').relativePosition.y = input.mapBetween(0 , 300);
        layer('orange8').relativePosition.x = input.mapBetween(0, 600);
        layer('orange9').relativePosition.y = input.mapBetween(0 , -500);
        layer('orange9').relativePosition.x = input.mapBetween(0, 500);
        layer('orange10').relativePosition.y = input.mapBetween(0 , -600);
        layer('orange10').relativePosition.x = input.mapBetween(0, -600);
        
        
        
        
    }
}