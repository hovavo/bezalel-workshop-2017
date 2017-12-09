project.svgName = 'design.svg';

project.svgReady = function() {
    
    view.onFrame = function() {
        layer('ribua1').rotation += 10;
    }
}