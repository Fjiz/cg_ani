Lights = function () {


    this.createAmbientLight = function () {

        var ambientLight = new THREE.AmbientLight(0xffffff);
        ambientLight.intensity = 0.5;
        return ambientLight;
    }

    this.createDirectionalLight = function (xPos, yPos, zPos) {

        var directionaLight = new THREE.DirectionalLight(0xffffff);
        directionaLight.position.set(xPos, yPos, zPos);
        directionaLight.lookAt(scene.position);
        directionaLight.intensity = 0.6;
        directionaLight.castShadow = true;
        directionaLight.shadow.radius = 2;
        directionaLight.shadow.mapSize.width = 2048;
        directionaLight.shadow.mapSize.height = 2048;
        directionaLight.shadow.camera.top = 100;
        directionaLight.shadow.camera.bottom = -100;
        directionaLight.shadow.camera.left = -100;
        directionaLight.shadow.camera.right = 100;

        //scene.add(new THREE.CameraHelper(directionaLight.shadow.camera));

        return directionaLight;
    }
}