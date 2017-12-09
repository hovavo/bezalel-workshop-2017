
project.svgName = 'design.svg';

project.svgReady = function () {

    // Yoyo animation for big solids
    var yoyo = new Yoyo(-3, 3);
    
    // Either animation for blinking
    var blink = new Either(0, 1);
    
    // Yoyo has a fixed speed do defined once
    yoyo.speed = 0.2;
    
    view.onFrame = function () {
        // Move all solids to and from the center based on data
        layer('white').relativePosition.y = input.mapBetween(0, -500);
        layer('blue').relativePosition.x = input.mapBetween(0, 500);
        layer('red').relativePosition.x = input.mapBetween(0, -300);
        layer('red2').relativePosition.x = input.mapBetween(0, -300);
        layer('black').relativePosition.y = input.mapBetween(0, 500);
        
        // Update yoyo to/from values based on data
        yoyo.from = input.mapBetween(-2, -10);
        yoyo.to = input.mapBetween(0, 5);
        // Tell yoyo to caculate the next step
        yoyo.step();
        
        // Rotate solids based on yoyo's current value
        layer('white').relativeRotation = yoyo.value;
        layer('blue').relativeRotation = yoyo.value * -1;
        layer('black').relativeRotation = yoyo.value;
        
        // Update the speed of blink based on data
        blink.speed = input.value;
        // Tell blink to caculate the next step
        blink.step();
        // Set opacity to blink value (either 0 or 1)
//        layer('serif').opacity = blink.value;
        
        // Rotate line1 based on data
        layer('line1').rotation = input.mapBetween(0, 52);
        
        // Set random rotation 
        layer('line2').rotation = randomNumber(input.mapBetween(0, 1));
        layer('line3').rotation = randomNumber(input.mapBetween(0, 1));
       
    }
}