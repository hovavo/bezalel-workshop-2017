
project.svgName = 'design.svg';

project.svgReady = function () {

    // To change numbers over time we can use animations.
    // We create an animation with the word 'new' followed by the animation type,
    // followed by parentheses with two numbers in them. These create the range to animate in.
    // We save the animation in a variable so we can use it later.
    
    // Animation types:
    
    // Yoyo.
    // Creates a back and forth animation from one number to the other.
    var anim1 = new Yoyo(-200, 200);
    var anim2 = new Yoyo(0, 1);
    
    // Loop.
    // Creates a repeating animation from one number to the other.
    var anim3 = new Loop(-200, 200);
    
    // Either.
    // Flips between the two numbers over.
    var anim4 = new Either(0, 1);
    
    // We can change the speed of the animation (default is 0.5)
    anim3.speed = 2;
    
    // We can change the range of numbers for the animations
    anim2.from = -90;
    anim2.top = 90;
    
    view.onFrame = function () {
        
        // On each frame:
        
        // We need to tell the animation to caculate the next value 
        anim1.step();
        // Then we can use the value and set it to a layer property
        layer('cat1').relativePosition.y = anim1.value;
        
        anim2.step();
        layer('cat2').rotation = anim2.value;
        
        anim3.step();
        layer('cat3').relativePosition.y = anim3.value;
        
        anim4.step();
        layer('cat4').opacity = anim4.value;
    }
}