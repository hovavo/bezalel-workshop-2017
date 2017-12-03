
project.svgName = 'design.svg';

project.setup = function () {

}

project.step = function () {
    layer('cat').rotation = yoyo(180, data);
    layer('text').position.y = data * 200 + 400;
}
