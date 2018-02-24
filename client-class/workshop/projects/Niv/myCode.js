project.svgName = 'comp.svg';

project.svgReady = function () {

   var yoyo1 = new Yoyo(0, 100);
   var yoyo2 = new Yoyo(10,60);
   var yoyo3 = new Yoyo (0,100);
    var yoyo4 =new Yoyo (0,25);
    var yoyo5 =new Yoyo (0,30);

    var loop1 =new Loop (100,10)
    //var opp1 =new opacity (0,50)
    layer('merpink').pivot = new Point (1170,325)
    layer ('mergreen').pivot = new Point (1490,1320)
    layer ('bubbels').pivot = new Point (1550,710)
    //layer('back2').opacity = anim4.value;

    
    view.onFrame = function () {
        
     //layer('mergreen').relativePosition.y = input.mapBetween(0, -500);
    //layer('merpink').relativePosition.x = input.mapBetween(0, -500);

        
  layer('shrimp').relativePosition.x = input.mapBetween(0, 300);
  layer('shrimp2').relativePosition.x = input.mapBetween(0, 450);
  layer('fish').relativePosition.x = input.mapBetween(0, 200);
  layer('fish2').relativePosition.x = input.mapBetween(0, 300);
  layer('fish3').relativePosition.x = input.mapBetween(0, 310);
  layer('fish4').relativePosition.x = input.mapBetween(0, -300);
  layer('fish5').relativePosition.x = input.mapBetween(0, -100);
  layer('fish6').relativePosition.x = input.mapBetween(0, -200);
  layer('merpink').relativeRotation = input.mapBetween(0, -200);
  layer('mergreen').relativeRotation = input.mapBetween(0, 200);
  //layer('bubbels').relativeRotation.y = input.mapBetween(200, 100); 
  layer('eel').relativePosition.x = input.mapBetween(0, -200);



        
        
               // layer('bubbels').opacity = input.mapBetween(10,1000);



                yoyo1.step();
                layer('cat').relativePosition.y = yoyo1.value;
                layer('fish').relativePosition.y = yoyo1.value;
                layer('fish4').relativePosition.y = yoyo1.value;


        
                yoyo2.step();
                layer('corgreen').relativePosition.x = yoyo2.value;
                layer('fish2').relativePosition.x = yoyo2.value;           layer('fish5').relativePosition.x = yoyo2.value;


                
               yoyo4.step();
                layer('merpink').relativePosition.x =yoyo4.value;         //layer('mergreen').relativePosition.y =yoyo4.value;
        
            yoyo3.step();
             layer('corpink').relativePosition.x = yoyo3.value;
             layer('eel').relativePosition.y = yoyo3.value;
          layer('shrimp2').relativePosition.y = yoyo3.value;
          layer('shrimp').relativePosition.y = yoyo3.value;
        
             yoyo5.step();
            //  layer('mergreen').relativePosition.y =yoyo5.value;
        layer('back2').opacity=input.mapBetween(1, 0);
        



  
                loop1.step();
                layer('bubbels').relativePosition.y =loop1.value;
                
                if (input.value < 0.1) {
                layer('bubbels').opacity = 1;    
                } else {
                    layer('bubbels').opacity = 0;
                }
                        

        

        

        
    
        
        



  
            
        

        


        
         
        

        

        
    }
}