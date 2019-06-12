Floor = function (dimX, dimY) {

    var floorGeometry = new THREE.PlaneGeometry(dimX, dimY);
    var floorMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff
    });

    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -90 * DEG_TO_RAD;
    floor.receiveShadow = true;

    return floor;
}