project.svgName = 'design.svg';

project.svgReady = function () {

  // layer('hand').pivot = [30, 65];

  view.onFrame = function () {
    layer('hand').position.y = input.mapBetween(0, view.size.height) + 27.5;
    layer('line').position.y = input.mapBetween(0, view.size.height);
  };

};