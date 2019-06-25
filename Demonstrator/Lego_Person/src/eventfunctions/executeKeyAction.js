var spaceDown = false;
var backgroundplay = false;

function keyDownAction(event) {
    switch (event.keyCode) {
        case 32: //Shoot with pressing 'spacebar'
            if (!spaceDown) {
                spaceDown = true;

                var legoBrick = new THREE.Group();

                // Throw a Lego
                var legoGeometry = new THREE.CylinderGeometry(8, 8, 20, 32, 1, false);
                var legoGeometry1 = new THREE.CylinderGeometry(5, 5, 30, 32, 1, false);
                var lego = new THREE.Mesh(legoGeometry, new THREE.MeshLambertMaterial({
                    color: 0x00FFFF
                }));
                var lego1 = new THREE.Mesh(legoGeometry1, new THREE.MeshLambertMaterial({
                    color: 0x00FFFF
                }));
                lego.castShadow = true;
                lego1.castShadow = true;
                legoBrick.add(lego);
                legoBrick.add(lego1);
                legoBrick.rotation.x = -90 * DEG_TO_RAD;


                scene.add(legoBrick);
                legoBrick.position.set(camera.position.x, camera.position.y, camera.position.z);


                var directionalVectorDC = new THREE.Vector3(0, 0, 1);
                var velocityVectorWC = directionalVectorDC.unproject(camera);
                velocityVectorWC.normalize();
                velocityVectorWC.multiplyScalar(600);
                physics.addSphereWithVelocity(legoBrick, 1, 15, velocityVectorWC);
            }
            break;

        case 80: //backgroundmusic by pressing 'p'
            if(!backgroundplay) {
                backgroundplay = true;
                cameraMusic.background = !cameraMusic.background;
                window.dispatchEvent(new Event("cameraMusic"));
            }
            break;
    }
}

function keyUpAction(event) {
    switch (event.keyCode) {
        case 32:
            spaceDown = false;
            break;
        case 80:
            backgroundplay = false;
            break;
    }
}
