project.svgName = 'design.svg';

project.svgReady = function () {
    
    var yoyo = new Yoyo(0.7, 1, 3);
    var yoyo2 = new Yoyo(1, 1.05, 1.5);
    
    // A place for code that should happen 
    // once the design is loaded
    //group window and window clipping mask
    var group = new Group(layer('clipper'),layer('bigshade'));
    group.clipped = true;
    
    //group light and light clipping mask
    var group = new Group(layer('lightClip'),layer('lights'))
    group.clipped = true;
    group.transformContent = false;
//    layer('openinglight').opacity = 0;
    
    view.onFrame = function () {
        yoyo.step();
        // A place for code that should
        // repeat on every frame 
        layer('bigshade').position.y = input.mapBetween(120 , 440);
        layer('lightClip').scaling.y = input.mapBetween(1.2,0);
        layer('lightClip').position.y = input.mapBetween(330,750);
        layer('bigshade').scaling.y = input.mapBetween(1 , 1.7);
        yoyo2.step();
//        layer('legs').rotation = yoyo2.value * 30;
        group.opacity = yoyo.value;
        group.scaling.x = yoyo2.value;
    }
}