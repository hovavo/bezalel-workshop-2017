project.svgName = 'design.svg';

project.svgReady = function () {

    // A place for code that should happen 
    // once the design is loaded
    
    var anim1 = new Yoyo(-3, 3);
    var anim9 = new Yoyo(-2, 2);
    var anim12 = new Yoyo(1, -1);
    var anim13 = new Yoyo(3, -1);
    
    var anim4 = new Either(0, 1);
    var anim7 = new Either(0, 1.2);
    var anim8 = new Either(0, 0.8);
    
    var anim3 = new Loop(-200, 200);
    
    var anim5 = new Loop(1000, -1700);
    
    var anim6 = new Yoyo(0, 4,0.3);
    var anim11 = new Yoyo(0, 4,0.7);
    var anim10 = new Yoyo(0, 2);
    
    view.onFrame = function () {
        
        layer('a1').visible = input.isBetween(0.002, 1);
        layer('a2').visible = input.isBetween(0.007, 1);
        layer('a3').visible = input.isBetween(0.010, 1);
        layer('a4').visible = input.isBetween(0.0014, 1);
        
        layer('a5').visible = input.isBetween(0.018, 1);
        layer('a6').visible = input.isBetween(0.023, 1);
        layer('a7').visible = input.isBetween(0.027, 1);
        layer('a8').visible = input.isBetween(0.032, 1);
        
        layer('a9').visible = input.isBetween(0.036, 1);
        layer('a10').visible = input.isBetween(0.040, 1);
        layer('a10b').visible = input.isBetween(0.044, 1);
        layer('a11').visible = input.isBetween(0.049, 1);
        layer('a12').visible = input.isBetween(0.054, 1);
        
        layer('a13').visible = input.isBetween(0.060, 1);
        layer('a14').visible = input.isBetween(0.064, 1);
        layer('a15').visible = input.isBetween(0.069, 1);
        layer('a16').visible = input.isBetween(0.073, 1);
        
        layer('a17').visible = input.isBetween(0.078, 1);
        layer('a17b').visible = input.isBetween(0.082, 1);
        layer('a18').visible = input.isBetween(0.086, 1);
        layer('a19').visible = input.isBetween(0.090, 1);
        layer('a20').visible = input.isBetween(0.094, 1);
        
        layer('a21').visible = input.isBetween(0.099, 1);
        layer('a22').visible = input.isBetween(0.103, 1);
        layer('a23').visible = input.isBetween(0.107, 1);
        layer('a24').visible = input.isBetween(0.112, 1);
        
        layer('a25').visible = input.isBetween(0.117, 1);
        layer('a26').visible = input.isBetween(0.121, 1);
        layer('a27').visible = input.isBetween(0.127, 1);
        layer('a28').visible = input.isBetween(0.131, 1);
        
        layer('a29').visible = input.isBetween(0.135, 1);
        layer('a30').visible = input.isBetween(0.140, 1);
        layer('a31').visible = input.isBetween(0.145, 1);
        
        layer('a33').visible = input.isBetween(0.150, 1);
        layer('a34').visible = input.isBetween(0.154, 1);
        layer('a35').visible = input.isBetween(0.159, 1);
        layer('a36').visible = input.isBetween(0.163, 1);
        layer('a37').visible = input.isBetween(0.167, 1);
        layer('a38').visible = input.isBetween(0.172, 1);
        layer('a39').visible = input.isBetween(0.176, 1);
        layer('a40').visible = input.isBetween(0.180, 1);
        layer('a41').visible = input.isBetween(0.184, 1);
        layer('a42').visible = input.isBetween(0.186, 1);
        layer('a43').visible = input.isBetween(0.190, 1);
        layer('a44').visible = input.isBetween(0.192, 1);
        layer('a45').visible = input.isBetween(0.194, 1);
        layer('a46').visible = input.isBetween(0.196, 1);
        layer('a47').visible = input.isBetween(0.199, 1);
        layer('a48').visible = input.isBetween(0.202, 1);
        layer('a49').visible = input.isBetween(0.204, 1);
        layer('a50').visible = input.isBetween(0.206, 1);
        layer('a51').visible = input.isBetween(0.208, 1);
        layer('a52').visible = input.isBetween(0.210, 1);
        layer('a53').visible = input.isBetween(0.213, 1);
        layer('a54').visible = input.isBetween(0.216, 1);
        layer('a55').visible = input.isBetween(0.218, 1);
        layer('a56').visible = input.isBetween(0.221, 1);
        layer('a57').visible = input.isBetween(0.224, 1);
        layer('a58').visible = input.isBetween(0.227, 1);
        layer('a59').visible = input.isBetween(0.230, 1);
        layer('a60').visible = input.isBetween(0.232, 1);
        
        layer('a61').visible = input.isBetween(0.236, 1);
        layer('a62').visible = input.isBetween(0.239, 1);
        layer('a63').visible = input.isBetween(0.243, 1);
        layer('a64').visible = input.isBetween(0.245, 1);
        layer('a65').visible = input.isBetween(0.247, 1);
        layer('a66').visible = input.isBetween(0.249, 1);
        layer('a67').visible = input.isBetween(0.252, 1);
        layer('a68').visible = input.isBetween(0.254, 1);
        layer('a69').visible = input.isBetween(0.257, 1);
        layer('a70').visible = input.isBetween(0.260, 1);
        layer('a71').visible = input.isBetween(0.263, 1);
        layer('a72').visible = input.isBetween(0.266, 1);
        layer('a73').visible = input.isBetween(0.268, 1);
        layer('a74').visible = input.isBetween(0.271, 1);
        layer('a75').visible = input.isBetween(0.274, 1);
        layer('a76').visible = input.isBetween(0.277, 1);
        layer('a77').visible = input.isBetween(0.280, 1);
        layer('a78').visible = input.isBetween(0.283, 1);
        layer('a79').visible = input.isBetween(0.287, 1);
        layer('a80').visible = input.isBetween(0.290, 1);
        layer('a81').visible = input.isBetween(0.293, 1);
        layer('a82').visible = input.isBetween(0.296, 1);
        layer('a83').visible = input.isBetween(0.299, 1);
        layer('a84').visible = input.isBetween(0.302, 1);
        layer('a85').visible = input.isBetween(0.306, 1);
        layer('a86').visible = input.isBetween(0.308, 1);
        layer('a87').visible = input.isBetween(0.310, 1);
        
        layer('a88').visible = input.isBetween(0.313, 1);
        layer('a89').visible = input.isBetween(0.316, 1);
        layer('a90').visible = input.isBetween(0.319, 1);
        layer('a91').visible = input.isBetween(0.322, 1);
        layer('a92').visible = input.isBetween(0.324, 1);
        layer('a93').visible = input.isBetween(0.326, 1);
        layer('a94').visible = input.isBetween(0.328, 1);
        layer('a95').visible = input.isBetween(0.330, 1);
        layer('a96').visible = input.isBetween(0.332, 1);
        layer('a97').visible = input.isBetween(0.335, 1);
        layer('a98').visible = input.isBetween(0.338, 1);
        layer('a99').visible = input.isBetween(0.340, 1);
        layer('a100').visible = input.isBetween(0.342, 1);
        layer('a101').visible = input.isBetween(0.345, 1);
        layer('a102').visible = input.isBetween(0.347, 1);
        layer('a103').visible = input.isBetween(0.349, 1);
        layer('a104').visible = input.isBetween(0.352, 1);
        layer('a105').visible = input.isBetween(0.354, 1);
        layer('a106').visible = input.isBetween(0.356, 1);
        layer('a107').visible = input.isBetween(0.358, 1);
        layer('a108').visible = input.isBetween(0.360, 1);
        layer('a109').visible = input.isBetween(0.362, 1);
        layer('a110').visible = input.isBetween(0.364, 1);
        layer('a111').visible = input.isBetween(0.366, 1);
        layer('a112').visible = input.isBetween(0.368, 1);
        layer('a113').visible = input.isBetween(0.370, 1);
        layer('a114').visible = input.isBetween(0.372, 1);
        layer('a115').visible = input.isBetween(0.374, 1);
        layer('a116').visible = input.isBetween(0.376, 1);
        layer('a117').visible = input.isBetween(0.378, 1);
        layer('a118').visible = input.isBetween(0.380, 1);
        layer('a119').visible = input.isBetween(0.382, 1);
        layer('a120').visible = input.isBetween(0.384, 1);
        layer('a121').visible = input.isBetween(0.386, 1);
        layer('a122').visible = input.isBetween(0.389, 1);
        layer('a123').visible = input.isBetween(0.393, 1);
        layer('a124').visible = input.isBetween(0.398, 1);
        layer('a125').visible = input.isBetween(0.403, 1);
        layer('a126').visible = input.isBetween(0.406, 1);
        layer('a127').visible = input.isBetween(0.409, 1);
        layer('a128').visible = input.isBetween(0.413, 1);
        layer('a129').visible = input.isBetween(0.416, 1);
        layer('a130').visible = input.isBetween(0.418, 1);
        layer('a131').visible = input.isBetween(0.422, 1);
        layer('a132').visible = input.isBetween(0.427, 1);
        layer('a133').visible = input.isBetween(0.431, 1);
        layer('a134').visible = input.isBetween(0.435, 1);
        layer('a135').visible = input.isBetween(0.437, 1);
        layer('a136').visible = input.isBetween(0.440, 1);
        layer('a137').visible = input.isBetween(0.444, 1);
        layer('a138').visible = input.isBetween(0.448, 1);
        layer('a139').visible = input.isBetween(0.452, 1);
        layer('a140').visible = input.isBetween(0.455, 1);
        layer('a141').visible = input.isBetween(0.460, 1);
        layer('a142').visible = input.isBetween(0.462, 1);
        layer('a143').visible = input.isBetween(0.465, 1);
        layer('a144').visible = input.isBetween(0.469, 1);
        layer('a145').visible = input.isBetween(0.472, 1);
        layer('a146').visible = input.isBetween(0.476, 1);
        layer('a147').visible = input.isBetween(0.480, 1);
        layer('a148').visible = input.isBetween(0.483, 1);
        layer('a149').visible = input.isBetween(0.486, 1);
        layer('a150').visible = input.isBetween(0.489, 1);
        layer('a151').visible = input.isBetween(0.492, 1);
        layer('a152').visible = input.isBetween(0.495, 1);
        layer('a153').visible = input.isBetween(0.499, 1);
        layer('a154').visible = input.isBetween(0.503, 1);
        layer('a155').visible = input.isBetween(0.506, 1);
        layer('a156').visible = input.isBetween(0.509, 1);
        layer('a157').visible = input.isBetween(0.512, 1);
        layer('a158').visible = input.isBetween(0.514, 1);
        layer('a159').visible = input.isBetween(0.517, 1);
        layer('a160').visible = input.isBetween(0.519, 1);
        layer('a161').visible = input.isBetween(0.522, 1);
        layer('a162').visible = input.isBetween(0.524, 1);
        layer('a163').visible = input.isBetween(0.527, 1);
        layer('a164').visible = input.isBetween(0.529, 1);
        layer('a165').visible = input.isBetween(0.532, 1);
        layer('a166').visible = input.isBetween(0.536, 1);
        layer('a167').visible = input.isBetween(0.539, 1);
        layer('a168').visible = input.isBetween(0.542, 1);
        layer('a169').visible = input.isBetween(0.546, 1);
        layer('a170').visible = input.isBetween(0.548, 1);
        layer('a171').visible = input.isBetween(0.552, 1);
        layer('a172').visible = input.isBetween(0.555, 1);
        layer('a173').visible = input.isBetween(0.558, 1);
        layer('a174').visible = input.isBetween(0.561, 1);
        layer('a175').visible = input.isBetween(0.564, 1);
        layer('a176').visible = input.isBetween(0.568, 1);
        layer('a177').visible = input.isBetween(0.571, 1);
        layer('a178').visible = input.isBetween(0.574, 1);
        layer('a179').visible = input.isBetween(0.576, 1);
        layer('a180').visible = input.isBetween(0.579, 1);
        layer('a181').visible = input.isBetween(0.583, 1);
        layer('a182').visible = input.isBetween(0.586, 1);
        layer('a183').visible = input.isBetween(0.589, 1);
        layer('a184').visible = input.isBetween(0.603, 1);
        layer('a185').visible = input.isBetween(0.606, 1);
        layer('a186').visible = input.isBetween(0.609, 1);
        layer('a187').visible = input.isBetween(0.612, 1);
        layer('a188').visible = input.isBetween(0.616, 1);
        layer('a189').visible = input.isBetween(0.619, 1);
        layer('a190').visible = input.isBetween(0.622, 1);
        layer('a191').visible = input.isBetween(0.626, 1);
        layer('a192').visible = input.isBetween(0.629, 1);
        layer('a193').visible = input.isBetween(0.633, 1);
        layer('a194').visible = input.isBetween(0.637, 1);
        layer('a195').visible = input.isBetween(0.641, 1);
        layer('a196').visible = input.isBetween(0.646, 1);
        layer('a197').visible = input.isBetween(0.651, 1);
        layer('a198').visible = input.isBetween(0.654, 1);
        layer('a199').visible = input.isBetween(0.661, 1);
        layer('a200').visible = input.isBetween(0.664, 1);
        layer('a201').visible = input.isBetween(0.669, 1);
        layer('a202').visible = input.isBetween(0.672, 1);
        layer('a203').visible = input.isBetween(0.675, 1);
        layer('a204').visible = input.isBetween(0.679, 1);
        layer('a205').visible = input.isBetween(0.682, 1);
        layer('a206').visible = input.isBetween(0.685, 1);
        layer('a207').visible = input.isBetween(0.689, 1);
        layer('a208').visible = input.isBetween(0.692, 1);
        layer('a209').visible = input.isBetween(0.695, 1);
        layer('a210').visible = input.isBetween(0.699, 1);
        layer('a211').visible = input.isBetween(0.673, 1);
        layer('a212').visible = input.isBetween(0.676, 1);
        layer('a213').visible = input.isBetween(0.680, 1);
        layer('a214').visible = input.isBetween(0.684, 1);
        layer('a215').visible = input.isBetween(0.687, 1);
        layer('a216').visible = input.isBetween(0.692, 1);
        layer('a217').visible = input.isBetween(0.695, 1);
        layer('a218').visible = input.isBetween(0.699, 1);
        layer('a219').visible = input.isBetween(0.673, 1);
        layer('a220').visible = input.isBetween(0.676, 1);
        layer('a221').visible = input.isBetween(0.679, 1);
        layer('a222').visible = input.isBetween(0.682, 1);
        layer('a223').visible = input.isBetween(0.685, 1);
        layer('a224').visible = input.isBetween(0.688, 1);
        
        
        
        anim1.step();
        layer('o1').relativePosition.y = anim1.value;
        layer('o3').relativePosition.y = anim1.value;
        layer('o5').relativePosition.y = anim1.value;
        layer('o7').relativePosition.y = anim1.value;
        layer('o9').relativePosition.y = anim1.value;
        layer('o11').relativePosition.y = anim1.value;
        layer('o13').relativePosition.y = anim1.value;
        
        anim13.step();
        layer('o2').relativePosition.y = anim13.value;
        layer('o4').relativePosition.y = anim13.value;
        layer('o6').relativePosition.y = anim13.value;
        layer('o8').relativePosition.y = anim13.value;
        layer('o10').relativePosition.y = anim13.value;
        layer('o12').relativePosition.y = anim13.value;
        layer('o14').relativePosition.y = anim13.value;
        layer('o15').relativePosition.y = anim13.value;
        
        anim9.step();
        layer('o16').relativePosition.y = anim9.value;
        layer('o17').relativePosition.y = anim9.value;
        layer('o18').relativePosition.y = anim9.value;
        layer('o19').relativePosition.y = anim9.value;
        layer('o20').relativePosition.y = anim9.value;
        layer('o21').relativePosition.y = anim9.value;
        layer('o22').relativePosition.y = anim9.value;
        layer('o23').relativePosition.y = anim9.value;
        layer('o24').relativePosition.y = anim9.value;
        layer('o25').relativePosition.y = anim9.value;
        
        anim12.step();
        layer('o26').relativePosition.y = anim12.value;
        layer('o27').relativePosition.y = anim12.value;
        layer('o28').relativePosition.y = anim12.value;
        layer('o29').relativePosition.y = anim12.value;
        layer('o30').relativePosition.y = anim12.value;
        layer('o31').relativePosition.y = anim12.value;
        layer('o32').relativePosition.y = anim12.value;
        layer('o33').relativePosition.y = anim12.value;
        layer('o34').relativePosition.y = anim12.value;
        layer('o35').relativePosition.y = anim12.value;
        layer('o36').relativePosition.y = anim12.value;
        layer('o36b').relativePosition.y = anim12.value;
        layer('o37').relativePosition.y = anim12.value;
        layer('o38').relativePosition.y = anim12.value;
        layer('o39').relativePosition.y = anim12.value;
        
        
        
        
        anim4.speed = input.mapBetween(0, 1);
        anim4.step();
        layer('o1').opacity = anim4.value;
        layer('o2').opacity = anim4.value;
        layer('o3').opacity = anim4.value;
        layer('o4').opacity = anim4.value;
        layer('o5').opacity = anim4.value;
        layer('o6').opacity = anim4.value;
        
        layer('o7').opacity = anim4.value;
        layer('o8').opacity = anim4.value;
        layer('o9').opacity = anim4.value;
        layer('o10').opacity = anim4.value;
        layer('o11').opacity = anim4.value;
        layer('o12').opacity = anim4.value;
        layer('o13').opacity = anim4.value;
        layer('o14').opacity = anim4.value;
        layer('o15').opacity = anim4.value;
        layer('o16').opacity = anim4.value;
        layer('o17').opacity = anim4.value;
        layer('o18').opacity = anim4.value;
        layer('o36b').opacity = anim4.value;
        layer('o36c').opacity = anim4.value;
        
        
        anim7.speed = input.mapBetween(0, 0.2);
        anim7.step();
        layer('o20').opacity = anim7.value;
        layer('o21').opacity = anim7.value;
        layer('o22').opacity = anim7.value;
        layer('o23').opacity = anim7.value;
        layer('o24').opacity = anim7.value;
        layer('o25').opacity = anim7.value;
        layer('o26').opacity = anim7.value;
        layer('o27').opacity = anim7.value;
        layer('o28').opacity = anim7.value;
        
        anim8.speed = input.mapBetween(0, 0.1);
        anim8.step();
        layer('o29').opacity = anim8.value;
        layer('o30').opacity = anim8.value;
     //   layer('o31').opacity = anim8.value;
      //  layer('o32').opacity = anim8.value;
        layer('o33').opacity = anim8.value;
        layer('o34').opacity = anim8.value;
        layer('o35').opacity = anim8.value;
        
        
        
        
    //    anim3.speed = input.mapBetween(0.2, 0.4);
    //    anim3.step();
     //   layer('o1').relativePosition.y = anim3.value;
     //   layer('o2').relativePosition.y = anim3.value;
     //   layer('o3').relativePosition.y = anim3.value;
     //   layer('o4').relativePosition.y = anim3.value;
    //    layer('o5').relativePosition.y = anim3.value;
    //    layer('o6').relativePosition.y = anim3.value;
     //   layer('o7').relativePosition.y = anim3.value;
    //    layer('o8').relativePosition.y = anim3.value;
   //     layer('o9').relativePosition.y = anim3.value;
    //    layer('o10').relativePosition.y = anim3.value;
    //    layer('o11').relativePosition.y = anim3.value;
   // //    layer('o12').relativePosition.y = anim3.value;
    //    layer('o13').relativePosition.y = anim3.value;
    //    layer('o14').relativePosition.y = anim3.value;
    //    layer('o15').relativePosition.y = anim3.value;
        
        
        
        anim5.speed = input.mapBetween(0.2, 0.4);
        anim5.step();
        layer('K1').relativePosition.x = anim5.value;
        layer('K2').relativePosition.y = anim5.value;
        layer('K3').relativePosition.y = anim5.value;
        layer('K4').relativePosition.x = anim5.value;
        layer('K5').relativePosition.y = anim5.value;
        layer('K6').relativePosition.y = anim5.value;
        layer('K7').relativePosition.x = anim5.value;
        layer('K8').relativePosition.y = anim5.value;
        layer('K9').relativePosition.y = anim5.value;
        layer('K10').relativePosition.y = anim5.value;
        layer('K11').relativePosition.y = anim5.value;
        layer('K12').relativePosition.y = anim5.value;
        layer('K13').relativePosition.y = anim5.value;
        
       
        anim6.step();
        layer('o20').scaling = anim6.value;
        layer('o21').scaling = anim6.value;
        layer('o22').scaling = anim6.value;
        layer('o23').scaling = anim6.value;
        layer('o24').scaling = anim6.value;
        layer('o25').scaling = anim6.value;
        layer('o26').scaling = anim6.value;
        layer('o36c').scaling = anim6.value;
        
        anim11.step();
        layer('o27').scaling = anim11.value;
     //   layer('o28').scaling = anim6.value;
        layer('o29').scaling = anim11.value;
        layer('o30').scaling = anim11.value;
        layer('o31').scaling = anim11.value;
        layer('o32').scaling = anim11.value;
        layer('o33').scaling = anim11.value;
        layer('o34').scaling = anim11.value;
        layer('o35').scaling = anim11.value;
        
        anim10.step();
        layer('o1').scaling = anim10.value;
        layer('o2').scaling = anim10.value;
        layer('o3').scaling = anim10.value;
        layer('o4').scaling = anim10.value;
        layer('o5').scaling = anim10.value;
        layer('o6').scaling = anim10.value;
        layer('o7').scaling = anim10.value;
        layer('o8').scaling = anim10.value;
        layer('o9').scaling = anim10.value;
        layer('o10').scaling = anim10.value;
        layer('o11').scaling = anim10.value;
        layer('o12').scaling = anim10.value;
        layer('o13').scaling = anim10.value;
        layer('o14').scaling = anim10.value;
        layer('o15').scaling = anim10.value;
        layer('o16').scaling = anim10.value;
        layer('o17').scaling = anim10.value;
        layer('o18').scaling = anim10.value;
        layer('o19').scaling = anim10.value;
        
        
        
    }
}