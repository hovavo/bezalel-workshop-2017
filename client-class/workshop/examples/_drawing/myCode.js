project.currentStyle.strokeColor = 'black';
project.currentStyle.strokeWidth = randomNumber(10, 2);

var igul = new Shape.Circle();
igul.position = view.center;
igul.radius = randomNumber(200, 30);

var ribua = new Shape.Rectangle();
ribua.position = Point.random() * view.size;
ribua.size = Size.random() * 100;
ribua.strokeColor = Color.random();