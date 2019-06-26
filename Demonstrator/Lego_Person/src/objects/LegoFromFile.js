// Legomännchen Import

LegoFromFile = function () {

    var Lego_Figure = new THREE.Group();

    var fbxLoader = new THREE.FBXLoader();

    legoAnimationMixer = null;

    fbxLoader.load('src/models/Lego2/Lego_26_06.fbx', function (object) {

        Lego_Figure.add(object);

/*        Ausgabe der Animationsnamen
        for (var i = 0; i < object.animations.length; i++) {
            console.log(object.animations[i].name);
        }
*/
        // Shadow für alle Meshes an
        object.traverse( function(child){
            console.log(child.name);
            if(child.name === "Head" || child.name === "Corpus" || child.name === "leftArm" || child.name === "rightArm"){
                child.castShadow = true;
            }
        });

        // Animationen laden
        // ohne var für global Zugriff
        legoAnimationMixer = new THREE.AnimationMixer(object);

        for (var j = 0; j < object.animations.length; j++) {
            var action = legoAnimationMixer.clipAction(object.animations[j]);
            action.clampWhenFinished = true;
            action.setLoop(THREE.LoopOnce);
        }
    });

    legoFBX = {
        head: false
    };

    return Lego_Figure;
};
