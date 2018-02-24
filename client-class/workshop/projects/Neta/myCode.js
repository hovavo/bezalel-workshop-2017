project.svgName = 'fan.svg';

project.svgReady = function () {

    // A place for code that should happen 
    // once the design is loaded
    
    var fanLoop = new Loop(0, 360);
    var fanLoop2 = new Loop(0, 360);
    
    var yoyo1 = new Yoyo (0,20,20)
    

    
    
    view.onFrame = function () {
        
        // A place for code that should
        // repeat on every frame 
        
        layer('cnafaim').rotation= fanLoop.value;
        
        fanLoop.step();
        
        fanLoop.speed=input.mapBetween(9, 4);
        
        fanLoop2.step();
        fanLoop2.speed=input.mapBetween(0, 5);


        // reset position otherwise flys away
        layer('cnafaim').relativePosition.x = 0;
        layer('cnafaim').relativePosition.y = 0;
        layer('chupchik').relativePosition.x = 0;
        layer('chupchik').relativePosition.y = 0;


        layer('chupchik').rotation= fanLoop2.value;

        fanLoop2.step();
        
        fanLoop2.speed=input.mapBetween(0, 5);

        
        yoyo1.step();
        layer('sratim2').relativePosition.y = yoyo1.value;
        
        
        
    
        


    }
}