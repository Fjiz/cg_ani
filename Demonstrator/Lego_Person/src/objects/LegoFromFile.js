// Legomännchen Import

LegoFromFile = function () {

    console.log('LegoFromFile');

    var Lego_Figure = new THREE.Group();

    var fbxLoader = new THREE.FBXLoader();

    legoAnimationMixer = null;

    fbxLoader.load('src/models/Lego2/Lego_25_06.fbx', function (object) {

        console.log('LegoFromFile-fbxLoader');
        Lego_Figure.add(object);

//        Ausgabe der Animationsnamen
        for (var i = 0; i < object.animations.length; i++) {
            console.log(object.animations[i].name);
        }

        // Shadow für alle Meshes an
        object.traverse( function(child){
            console.log(child.name)
            if(child.name === "Head" || child.name === "Corpus" || child.name === "leftArm" || child.name === "rightArm"){
                child.castShadow = true;
            }
        });

        // Animationen laden
        // ohne var für global Zugriff
        legoAnimationMixer = new THREE.AnimationMixer(object);

        for (var i = 0; i < object.animations.length; i++) {
            var action = legoAnimationMixer.clipAction(object.animations[i]);
            action.clampWhenFinished = true;
            action.setLoop(THREE.LoopOnce);
        }
    });

    legoFBX = {
        head: false
    };

    return Lego_Figure;
};
