// External libraries
document.write('<script type="text/javascript" src="../lib/dat.gui-0.7.6/build/dat.gui.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r103/build/three.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r103/examples/js/controls/OrbitControls.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r103/examples/js/libs/stats.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r103/examples/js/libs/tween.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r103/examples/js/libs/inflate.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-r103/examples/js/loaders/FBXLoader_r90.js"></script>');
document.write('<script type="text/javascript" src="../lib/cannon.js-0.6.2/build/cannon.js"></script>');
document.write('<script type="text/javascript" src="../lib/cannon.js-0.6.2/tools/threejs/CannonDebugRenderer.js"></script>');
document.write('<script type="text/javascript" src="../lib/ThreeCSG-1/three-csg.js"></script>');


//Module
document.write('<script type="text/javascript" src="src/objects/Lego.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Floor.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Lights.js"></script>');
document.write('<script type="text/javascript" src="src/objects/LegoFromFile.js"></script>');
document.write('<script type="text/javascript" src="src/animation/Animation.js"></script>');
document.write('<script type="text/javascript" src="src/physics/Physics.js"></script>');
document.write('<script type="text/javascript" src="src/sound/Sound.js"></script>');

//Events
document.write('<script type="text/javascript" src="src/eventfunctions/resizeWindow.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/calculateMousePosition.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/raycaster.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/executeKeyAction.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/setSound.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/setSoundLegend.js"></script>');

const DEG_TO_RAD = Math.PI / 180;

function main () {
// ohne var für global Zugriff
    scene = new THREE.Scene();

    physics = new Physics();
    physics.initialize(0, -200, 0, 1/120, true);
    physicsVisualDebugger = new THREE.CannonDebugRenderer(scene, physics.getWorld());

    sound = new Sound();

    var person = new Person();
    person.position.set(85, 100, 20);
    physics.addPersonBox(person, 3, 75, 144, 35, 28, 76, 0, -27);
//    physics.addBox(person, 3,75, 146, 35, 0, -27,0);
//    physics.addBox(person, 3, 50, 56, 35, 0, 60 , 0);
    scene.add(person);

    var legoFigure = new LegoFromFile();
    legoFigure.position.set(-85, 0, 20);
<<<<<<< HEAD
    physics.addBox(legoFigure, 3,75,103, 35, 0,72,0);
=======
    physics.addPersonBox(legoFigure, 3, 75, 144, 35, 28, 175, 0, 72);
//    physics.addBox(legoFigure, 3,50,50, 50, 0,50,0);
>>>>>>> c0cb9228baae32f8b98a1cc0e1ef1ffb52e374c8
//    physics.addSphere(legoFigure, 3, 28, 0, 175, 0)
    sound.addSound(legoFigure, "src/sound/files/legendTrack.mp3", 5, true);
    scene.add(legoFigure);

    scene.add(new Floor(350, 350, 4));

    var Light = new Lights();
    var ambientLight = new Lights();
    scene.add(ambientLight.createAmbientLight());

    var directionalLight = Light.createDirectionalLight(0, 250, 150);
    scene.add(directionalLight);

    // GUI mit OrbitControls De-/Aktivierung für Testzwecke
    // GUI für das Licht (Shadow purpose)

    var gui = new dat.GUI()
    gui.add(directionalLight.position, "x", -250,250).onChange(function(e) {directionalLight.position.x = e;});
    gui.add(directionalLight.position, "y", -250,250).onChange(function(e) {directionalLight.position.y = e;});
    gui.add(directionalLight.position, "z", -250,250).onChange(function(e) {directionalLight.position.z = e;});

    gui.domElement.onmouseenter = function() {
        orbitControls.enabled = false;
    }

    gui.domElement.onmouseleave = function() {
        orbitControls.enabled = true;
    }

// ohne var für global Zugriff
    
    camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 180, 250);
    camera.lookAt(0, 0, 0);
    camera.add(sound.getAudioListener());
    sound.addSound(camera, "src/sound/files/awesome.mp3", 5, true);

    cameraMusic = {
        background: false
    };

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.target = new THREE.Vector3(0, 50, 0);
    orbitControls.update();

// ohne var für global Zugriff

    renderer = new THREE.WebGLRenderer({antialias:true}); //K: Antialias angemacht
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.shadowMap.enabled = true;

    document.getElementById('3d_content').appendChild(renderer.domElement);

    var clock = new THREE.Clock();

    function mainLoop () {

        var delta = clock.getDelta();

        physics.update(delta);
        physicsVisualDebugger.update();
        headAnimation.update(delta);

        if (legoAnimationMixer != null)
            legoAnimationMixer.update(delta);

        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }

    mainLoop();

    window.onresize = resizeWindow;
    window.onmousemove = calculateMousePosition;
    window.onclick = executeRaycast;
    window.onkeydown = keyDownAction;
    window.onkeyup = keyUpAction;

    window.addEventListener('cameraMusic', setSound);
    window.dispatchEvent(new Event('cameraMusic'));

    window.addEventListener('legoPrimitive', setSoundLegend);
    window.dispatchEvent(new Event('legoPrimitive'));

    window.addEventListener('legoFBX', setSoundLegend);
    window.dispatchEvent(new Event('legoFBX'));
}

window.onload = main;