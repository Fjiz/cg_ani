// Der Fußboden

Floor = function (dimX, dimY, segments) {

    var floorGeometry = new THREE.PlaneGeometry(dimX, dimY);
    var floorMaterial = new THREE.MeshStandardMaterial({
        color: 0x999999,
        roughness: 0.2,
        metalness: 0.0,
    });

    var floorTexture = new THREE.TextureLoader().load('src/images/Blocks256_green.png');
    floorTexture.repeat.set(segments / 2, segments / 2);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorMaterial.map = floorTexture;
    var normalMap = new THREE.TextureLoader().load('src/images/Blocks256_norm.png');
    normalMap.repeat.set(segments / 2, segments / 2);
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;
    floorMaterial.normalMap = normalMap;

    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -90 * DEG_TO_RAD;
    floor.receiveShadow = true;

    return floor;
};