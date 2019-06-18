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

document.write('<script type="text/javascript" src="src/objects/Lego.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Floor.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Lights.js"></script>');
document.write('<script type="text/javascript" src="src/objects/LegoFromFile.js"></script>');

const DEG_TO_RAD = Math.PI / 180;
/*
const measureX = 13;
const measureY = 47;
const measureZ =  13;
*/
function main () {

    scene = new THREE.Scene();

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
/*
    //Measure
    var boxgeometry = new THREE.BoxGeometry(measureX, measureY, measureZ);
    var boxMaterial = new THREE.MeshLambertMaterial({color:0xffff00});
    var box = new THREE.Mesh(boxgeometry, boxMaterial);
    box.rotation.set(0.17, 0, 0);
    box.position.set(-163, measureY/2, 9);
    scene.add(box);
*/
    //ADD Build-Lego
    var person = new Person();
    person.position.set(113.75, 0, 0);
    scene.add(person);

    //ADD finished Model
    var legoFigure = new LegoFromFile();
    legoFigure.position.set(-50, 0, 0);
    scene.add(legoFigure);

    scene.add(new Floor(500, 500));

    var ambientLight = new Lights();
    scene.add(ambientLight.createAmbientLight());

    var Light = new Lights();
    var directionalLight = Light.createDirectionalLight(-30, 200, 100);
    scene.add(directionalLight);

    var camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 180, 250);
    camera.lookAt(0, 0, 0);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xffffff));

    document.getElementById('3d_content').appendChild(renderer.domElement);

    function mainLoop () {
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }
    mainLoop();

}
window.onload = main;