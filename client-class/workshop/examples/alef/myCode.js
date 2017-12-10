
project.svgName = 'design.svg';

project.svgReady = function () {

    // Yoyo animation for big solids
    var yoyo = new Yoyo(-3, 3);
    // Yoyo has a fixed speed do defined once
    yoyo.speed = 0.2;
    
    // Random animation for thin lines
    var random = new Random(0, 1);
    // Fixed speed
    random.speed = 2;
    
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
        
        // Rotate line1 based on data
        layer('line1').rotation = input.mapBetween(0, 52);
        
        // Update random to/from values based on data
        random.to = input.mapBetween(0, 1);
        // Tell random to caculate the next step
        random.step();
        
        // Rotate lines based on random's current value
        layer('line2').rotation = random.value;
        layer('line3').rotation = random.value;
       
    }
}