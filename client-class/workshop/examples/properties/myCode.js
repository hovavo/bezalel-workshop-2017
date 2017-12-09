project.svgName = 'design.svg';
project.svgReady = function () {

    // A list of properties available for manipulation:
    
    // Show / hide. 
    // Either true (show) or false (hide)
    layer('ribua1').visible = true;
    
    // Transparency. 
    // From 0 (transparent) to 1 (opaque)
    layer('ribua1').opacity = 1;
    
    // Fill color name.
    // Can be name or hex code
    layer('ribua1').fillColor = 'red';
    layer('ribua1').fillColor = '#FF0000';
    
    // Stroke color name.
    // Can be name or hex
    layer('ribua1').strokeColor = 'green';
    layer('ribua1').strokeColor = '#00FF00';
    
    // Color hue (place on the color wheel).
    // From 0 (red) to 360 (also red)
    layer('ribua1').strokeColor.hue = 90; 
    
    // Color saturation.
    // From 0 (grayscale) to 1 (full color)
    layer('ribua1').strokeColor.saturation = 1; 
    
    // Color brightness.
    // From 0 (darkest) to 1 (brightest)
    layer('ribua1').strokeColor.brightness = 1; 
    
    // Stroke width in pixels.
    // From 0 (none) to whatever.
    layer('ribua1').strokeWidth = 20;
    
    // Position from top left of the window.
    // x and y values in pixels.
    layer('ribua1').position.x = 400;
    layer('ribua1').position.y = 300;
    
    // Position relative to original place in the svg.
    // Can be x and y values in pixels.
    layer('ribua1').relativePosition.x = 10;
    layer('ribua1').relativePosition.y = -10;
    // Or angle (0 to 360 degrees) and distace (in pixels).
    layer('ribua1').relativePosition.angle = 10;
    layer('ribua1').relativePosition.y = -10;
    
    // Rotation.
    // Degrees - from 0 to 360.
    layer('ribua1').rotation = 20;
    
    // Size.
    // width and height values in pixels 
    layer('ribua1').size.width = 100;
    layer('ribua1').size.height = 100;
    
    // Scale (size) relative to original size in svg.
    // Any number. 1 is the original. 2 is double. 0 is invisible. etc.
    // Can be set as one value to keep proportions
    layer('ribua1').scaling = 1;
    // Can be set as as x and y to break proportions
    layer('ribua1').scaling.x = 1;
    layer('ribua1').scaling.y = 2;
}