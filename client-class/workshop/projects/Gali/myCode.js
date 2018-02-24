project.svgName = 'design.svg';

project.svgReady = function () {

    // A place for code that should happen 
   // once the design is loaded
   
    var speed = 2;
    var words = ['matam', 'min', 'mish','merhaba','mnich','mara'];
    var frame = 0;
    
    words.forEach(function(word, i) {
        layer(word).i = i;
        layer(word).visible = false;
    });
        
    view.onFrame = function () {
        
        frame += speed / 10;
        if (frame > words.length - 1) {
            frame = 0;
        }

        // A place for code that should
        // repeat on every frame
          speed = input.mapBetween(0, 3);
        
        layer('mem2').position.x=input.mapBetween(866.741 - 230 ,915.2); 
        layer('mem2').position.y=input.mapBetween(325.804 ,480.2);
        
        layer('mem').relativePosition.x = input.mapBetween(-230, 0);
        layer('mish').relativePosition.x = input.mapBetween(-230, 0);
        layer('min').relativePosition.x = input.mapBetween(-230, 0);
        layer('matam').relativePosition.x = input.mapBetween(-230, 0);
        layer('merhaba').relativePosition.x = input.mapBetween(-230, 0);
        layer('mnich').relativePosition.x = input.mapBetween(-230, 0);
        layer('mara').relativePosition.x = input.mapBetween(-230, 0);
        
        
         words.forEach(function(word) {
            layer(word).visible = (Math.floor(frame) == Math.floor(layer(word).i));
        });
        
        if (layer('mem2').position.x < 870){
             words.forEach(function(word) {
                layer(word).visible = false;
            });
        }
        
   
    }
}