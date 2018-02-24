project.svgName = 'design.svg';

project.svgReady = function () {

    var anim1 = new Loop(-view.size.width, 2*view.size.width);
   var anim2 = new Loop (2*view.size.width, -view.size.width);
  var anim3 = new Loop (-view.size.width, 2*view.size.width);
    
    view.onFrame = function () {
   
        anim1.speed = input.mapBetween(1,20);
        
        anim1.step();
       
        layer('bg').position.x = anim1.value;
      
        anim2.step();
        
        layer ('bg2').position.x = anim2.value;
        
       anim3.speed = input.mapBetween(5,80);
        
        anim3.step();
        layer ('bg3').position.x = anim3.value;
        
        layer('kari').rotation = input.mapBetween(0, 180);
        
        layer('lokari').rotation = input.mapBetween(0, 68);
        
        
    }
}