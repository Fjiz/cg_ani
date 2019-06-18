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

//Module
document.write('<script type="text/javascript" src="src/objects/Lego.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Floor.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Lights.js"></script>');
document.write('<script type="text/javascript" src="src/objects/LegoFromFile.js"></script>');

//Events
document.write('<script type="text/javascript" src="src/eventfunctions/resizeWindow.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/calculateMousePosition.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/raycaster.js"></script>');

const DEG_TO_RAD = Math.PI / 180;

function main () {
// ohne var für global Zugriff
    scene = new THREE.Scene();
/*
    var axes = new THREE.AxesHelper(250);
    scene.add(axes);

    var person = new Person();
    person.position.set(50, 0, 0);

    scene.add(person);
*/

    var legoFigure = new LegoFromFile();
    legoFigure.position.set(-50, 0, 0);
    scene.add(legoFigure);

    scene.add(new Floor(500, 500));

    var ambientLight = new Lights();
    scene.add(ambientLight.createAmbientLight());

    var Light = new Lights();
    var directionalLight = Light.createDirectionalLight(-30, 200, 100);
    scene.add(directionalLight);

    // GUI mit OrbitControls De-/Aktivierung für Testzwecke
/*
    var gui = new dat.GUI()
    gui.add(legoFigure.position, "x", -250,250).onChange(function(e) {legoFigure.position.x = e;});
    gui.add(legoFigure.position, "y", -250,250).onChange(function(e) {legoFigure.position.y = e;});
    gui.add(legoFigure.position, "z", -250,250).onChange(function(e) {legoFigure.position.z = e;});

    gui.domElement.onmouseenter = function() {
        orbitControls.enabled = false;
    }

    gui.domElement.onmouseleave = function() {
        orbitControls.enabled = true;
    }
*/
// ohne var für global Zugriff
    
    camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 180, 250);
    camera.lookAt(0, 0, 0);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

// ohne var für global Zugriff

    renderer = new THREE.WebGLRenderer({antialias:true}); //K: Antialias angemacht
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xffffff));

    document.getElementById('3d_content').appendChild(renderer.domElement);

    function mainLoop () {
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }

    mainLoop();

    window.onresize = resizeWindow;
    window.onmousemove = calculateMousePosition;
    window.onclick = executeRaycast;
}

window.onload = main;