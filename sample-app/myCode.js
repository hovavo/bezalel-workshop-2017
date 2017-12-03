
project.svgName = 'design.svg';

project.setup = function () {
//    layer('cat').pivot = layer('cat').bounds.center * 2;
//    layer('cat').selected = true;
//    console.log(layer('cat').position);
}

project.step = function () {
    layer('cat').rotation = yoyo(180, data);
//    console.log(layer('cat').position);
    layer('text').position.y = data * 200 + 400;
}
