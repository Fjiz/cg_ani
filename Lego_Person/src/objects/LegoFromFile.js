LegoFromFile = function () {

    console.log('LegoFromFile')

    var Lego_Figure = new THREE.Group();

    var fbxLoader = new THREE.FBXLoader();

    fbxLoader.load('src/models/Lego1/Lego_v0.2.fbx', function (object) {

        console.log('LegoFromFile-fbxLoader');

        Lego_Figure.add(object);



    });

    return Lego_Figure;
}