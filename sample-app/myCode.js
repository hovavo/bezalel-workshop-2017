
project.svgName = 'design.svg';

project.svgReady = function () {

    view.onFrame = function () {
        
        layer('igul').strokeWidth = data.mapBetween(7, 20);
        layer('igul2').scaling = data.mapBetween(1, 0.5);
        
        layer('saw1').position.y = data.mapBetween(0, 40) + layer('saw1').origin.y;
        layer('saw2').position.y = data.mapBetween(0, -40) + layer('saw2').origin.y;
        
        layer('ribua').rotation = data.mapBetween(0, 45);
        layer('ribua2').rotation = data.mapBetween(45, 0);
        
        layer('ribua3').opacity = data.mapBetween(0, 1);
        layer('ribua4').opacity = data.mapBetween(1, 0);
        
        layer('poly').strokeColor.hue = data.mapBetween(0, 360);
        layer('poly2').fillColor.hue = data.mapBetween(360, 0);
        
        layer('igul3').visible = data.isBetween(0.2, 1);
        layer('igul4').visible = data.isBetween(0.4, 1);
        layer('igul5').visible = data.isBetween(0.6, 1);
        layer('igul6').visible = data.isBetween(0.8, 1);
        layer('igul7').visible = data.isBetween(0, 1);
        layer('igul8').visible = data.isBetween(0.8, 1);
        layer('igul9').visible = data.isBetween(0.6, 1);
        layer('igul10').visible = data.isBetween(0.4, 1);
        layer('igul11').visible = data.isBetween(0.2, 1);
    }
}