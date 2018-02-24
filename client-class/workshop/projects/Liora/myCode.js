project.svgName = 'maze.svg';

project.svgReady = function () {

 var anim1 = new Loop(360, 0)
 var anim2 = new Loop(360, 0)
 var anim3 = new Loop (-100, view.size.width)
 var anim4 = new Loop (view.size.width, -100)
 var anim5 = new Either (0.50, 1, 2)
 var anim6 = new Either (0.30, 0.75, 2)
 var anim7 = new Either (0.2, 0.5, 3)
 var anim8 = new Either (0.50, 0.75, 1)
 var anim9 = new Either (0.2, 0.5, 0.10)
 var anim10 = new Either (0.40,0.75, 4)
 var anim11 = new Either (0.10, 1, 3)
 var anim12 = new Either (0, 2, 4)

    view.onFrame = function (){

        anim1.step();
        layer('siahkatan').rotation = anim1.value;
        anim2.step();
        layer('siahgadol').relativeRotation = anim2.value;
        layer('siahktantan').rotation = anim2.value;
        anim3.step();
        layer('siahktantan').position.x = anim3.value;
        anim4.step();
        layer('siahgadol').position.x = anim4.value;
        layer('siahkatan').position.x = anim4.value;
        
        layer('night').opacity = input.value;
        anim5.step();
        layer('stars1').opacity = anim5.value;
        anim6.step();
        layer('stars2').opacity = anim6.value;
        anim7.step();
        layer('stars3').opacity = anim7.value;
        anim8.step();
        layer('stars4').opacity = anim8.value;
        anim9.step();
        layer('stars5').opacity = anim9.value;
        anim10.step();
        layer('stars6').opacity = anim10.value;
        anim11.step();
        layer('star7').opacity = anim11.value;
        anim12.step();
        layer('star8').opacity = anim12.value;
    }
}