project.svgName = 'design.svg';

project.svgReady = function () {
    
    var wobbleYoyo = new Yoyo(-5, 5, 10);
    var circularYoyo = new Loop(0, 6.28, 20);
    
    var words = ['the2', 'world', 'in', 'thing', 'biggest', 'the1', 'is', 'what']
    var items = ['phone', 'clock', 'picture', 'horse', 'milk', 'cup', 'cal', 'soup', 'craft']
    
    view.onFrame = function() {
        
        wobbleYoyo.step()
        circularYoyo.step()
        
        words.forEach(function(word){
            layer(word).relativeRotation = wobbleYoyo.value
        })
        
        items.forEach(function(item){
            layer(item).relativePosition.x = Math.cos(circularYoyo.value) * 10
            layer(item).relativePosition.y = Math.sin(circularYoyo.value) * 10       
        })
        
        layer('home').relativePosition.y = input.mapBetween(1000, 0)
        
        layer('red').position.x = input.mapBetween(465.05, 405.998)
        layer('red').position.y = input.mapBetween(510.387, 384.492)
        
        layer('kid').position.x = input.mapBetween(1636.317, 1547.686)
        layer('kid').position.y = input.mapBetween(184.717, 500.733)
        
        layer('bird').position.x = input.mapBetween(1712.903, 976.194)
        layer('bird').position.y = input.mapBetween(853.326, 544.037)
        
        layer('what').position.x = input.mapBetween(844.593, 301.611)
        layer('what').position.y = input.mapBetween(133.449, 140.592)
        
        layer('is').position.x = input.mapBetween(1027.438, 634.466)
        layer('is').position.y = input.mapBetween(134.157, 93.458)
        
        layer('biggest').position.x = input.mapBetween(1201.719, 1541.529)
        layer('biggest').position.y = input.mapBetween(369.574, 132.765)
        
        layer('thing').position.x = input.mapBetween(861.021, 387.461)
        layer('thing').position.y = input.mapBetween(539.789, 865.5)
     
        layer('in').position.x = input.mapBetween(841.413, 820.193)
        layer('in').position.y = input.mapBetween(920.21, 935.641)
        
        layer('the1').position.x = input.mapBetween(1137.376, 968.913)
        layer('the1').position.y = input.mapBetween(130.653, 84.892)
        
        layer('the2').position.x = input.mapBetween(840.395, 1120.637)
        layer('the2').position.y = input.mapBetween(812.049, 941.303)
        
        layer('world').position.x = input.mapBetween(853.916, 1556.894)
        layer('world').position.y = input.mapBetween(592.317, 924.028)
        
        layer('horse').position.x = input.mapBetween(231.21, 1156.895)
        layer('horse').position.y = input.mapBetween(110.733, 660.655)
        
       layer('world').rotation = input.mapBetween(-90, 0)
        
        layer('biggest').rotation = input.mapBetween(90, 0)
        
                layer('thing').rotation = input.mapBetween(-90, 0)

                layer('in').rotation = input.mapBetween(-90, 0)

                layer('the2').rotation = input.mapBetween(90, 0)


        
    }
}