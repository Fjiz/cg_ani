// Legomännchen Import

LegoFromFile = function () {

    console.log('LegoFromFile')

    var Lego_Figure = new THREE.Group();

    var fbxLoader = new THREE.FBXLoader();

    fbxLoader.load('src/models/Lego2/Lego_v0.3.fbx', function (object) {

        console.log('LegoFromFile-fbxLoader');

        object.traverse( function(child){
            if(child.name === "Head" || child.name === "Corpus" || child.name === "Corpus001" || child.name === "Corpus002"){
                child.castShadow = true;
            }
        })

        Lego_Figure.add(object);
    });

    return Lego_Figure;
}