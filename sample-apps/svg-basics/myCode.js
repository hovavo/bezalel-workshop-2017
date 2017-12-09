
project.svgName = 'design.svg';

project.svgReady = function () {

    view.onFrame = function () {
        
        layer('igul').strokeWidth = input.mapBetween(7, 20);
        layer('igul2').scaling = input.mapBetween(1, 0.5);
        
        layer('saw1').relativePosition.y = input.mapBetween(0, 40);
        layer('saw2').relativePosition.y = input.mapBetween(0, -40);
        
        layer('ribua').rotation = input.mapBetween(0, 45);
        layer('ribua2').rotation = input.mapBetween(45, 0);
        
        layer('ribua3').opacity = input.mapBetweenPositive(0, 1);
        layer('ribua4').opacity = input.mapBetweenPositive(1, 0);
        
        layer('poly').strokeColor.hue = input.mapBetween(0, 360);
        layer('poly2').fillColor.hue = input.mapBetween(360, 0);
        
        layer('igul3').visible = input.isBetween(0.2, 1);
        layer('igul4').visible = input.isBetween(0.4, 1);
        layer('igul5').visible = input.isBetween(0.6, 1);
        layer('igul6').visible = input.isBetween(0.8, 1);
        layer('igul7').visible = input.isBetween(0, 1);
        layer('igul8').visible = input.isBetween(0.8, 1);
        layer('igul9').visible = input.isBetween(0.6, 1);
        layer('igul10').visible = input.isBetween(0.4, 1);
        layer('igul11').visible = input.isBetween(0.2, 1);
    }
}