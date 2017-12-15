project.svgName = 'ha.svg';

project.svgReady = function ()
{

    // A place for code that should happen 
    // once the design is loaded
    
    //debug
    var text = new PointText(new Point(200, 50));
    
    //SCREEN SIZE
    var frame_width = 1920;
    var frame_height = 1080;
    
    var ripple2_phase_size = 0;
    var ripple2_phase_opacity = 0;
    
    var timer = 0;
    var inputA = 0;
    var inputB = 0;
    var delta = 0;
    
    //STRUCTURE
    layer('hand').pivot = layer('hand').bounds.topRight;
    var ripple1 = new Shape.Circle(new Point(795.8, 705), 56.693);
    ripple1.strokeColor = '#B7E6EE';
    var ripple2 = new Shape.Circle(new Point(1125.8, 705), 56.693);
    ripple2.strokeColor = '#B7E6EE';
    
    ripple1.strokeWidth = 28.346;
    ripple2.strokeWidth = 28.346;
    
    var rippleGroup = new Group(layer('rippleClipper'),ripple1,ripple2);
    rippleGroup.clipped = true;
    
    
    //ANIMATIONS
    var anim_ship_move = new Yoyo(-120, 120);
    var anim_cloud_near = new Loop(-510,frame_width+510);
    var anim_cloud_far = new Loop(-340,frame_width+340);
    var anim_bubble = new Loop(100,-375);
    var anim_ripple1_size = new Loop(1,3);
    var anim_ripple1_opacity = new Loop(1.05,0.05)
    var anim_ripple2_size = new Loop(1,3);
    var anim_ripple2_opacity = new Loop(1.05,0.05)
    view.onFrame = function ()
    {
        //debug
        text.justification = 'center';
        text.fillColor = 'black';
        //text print goes here;
        
    //SHIP MOVEMENT
        anim_ship_move.speed = input.mapBetween(0.075,0.025);
        anim_ship_move.step();
        layer('ship').relativePosition.x = anim_ship_move.value;
    
    //SHIP COLOR
        //layer('ship').fillColor = input.value;
        
    //CLOUDS MOVEMENT
        anim_cloud_near.speed = input.mapBetween(0.3,0.1);
        anim_cloud_near.step();
        layer('cloudNear').position.x = anim_cloud_near.value;
        
        anim_cloud_far.speed = input.mapBetween(0.15,0.05);
        anim_cloud_far.step();
        layer('cloudFar').position.x = anim_cloud_far.value;
        
    //HEAD MOVEMENT
        layer('head').relativePosition.y = input.mapBetween(0, 222);
        layer('nose').relativePosition.y = input.mapBetween(0,222); 
        if(input.value > 1-145/222)
            {
                layer('mouth').relativePosition.y = input.mapBetween(0,222)-76;
            }
        if(input.value > 0.80)
            {
                layer('head').opacity = input.mapBetween(20,0);
                layer('nose').opacity = input.mapBetween(20,0);

            }
        else
            {
                layer('head').opacity = 1;
            }
            
    //HAND MOVEMENT
        layer('hand').relativePosition.y = input.mapBetween(-61,346-61);
        layer('arm').relativePosition.y = input.mapBetween(0,346);
        layer('hand').rotation = input.mapBetween(0,90);

    //BUBBLE MOVEMENT
        anim_bubble.speed = 0.1;
        anim_bubble.step();
        layer('bubble').relativePosition.y = anim_bubble.value;
    
    //RIPPLE MOVEMENT
        anim_ripple1_opacity.speed = 0.0005;
        anim_ripple1_opacity.step();
        ripple1.opacity = anim_ripple1_opacity.value;
        
        anim_ripple1_size.speed = 0.001;
        anim_ripple1_size.step();
        ripple1.scaling = anim_ripple1_size.value;
        ripple1.strokeWidth = 28.346/anim_ripple1_size.value;
        
        anim_ripple2_opacity.speed = 0.0005;
        anim_ripple2_opacity.step();
        ripple2.opacity = ripple2_phase_opacity;
        
        ripple2_phase_size = anim_ripple2_size.value + 1;
        if (ripple2_phase_size > 3)
        {
            ripple2_phase_size -= 2;
        }
        ripple2_phase_opacity = anim_ripple2_opacity.value + 0.5;
        if (ripple2_phase_opacity > 1.05)
        {
            ripple2_phase_opacity -= 1;
        }
        
        anim_ripple2_size.speed = 0.001;
        anim_ripple2_size.step();
        ripple2.scaling = ripple2_phase_size;
        ripple2.strokeWidth = 28.346/ripple2_phase_size;
        
        //TIMER EFFECT
        //timer += 1;
        //if (timer%5 == 0)
        //    {
        //        inputA = inputB;
        //        inputB = input.value;
        //        delta = (inputB - inputA);
        //        if (delta < 0)
        //        {
        //            delta = delta * -1;
        //        }
        //        console.log(delta);
        //    }
        //if (delta > 0.1)
        //    {
        //        anim_ripple1_size.step();
        //        anim_ripple1_size.step();
        //        anim_ripple1_size.step();
        //        anim_ripple1_opacity.step();
        //        anim_ripple1_opacity.step();
        //        anim_ripple1_opacity.step();
        //    }
    }
}