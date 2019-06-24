var spaceDown = false;

function keyDownAction(event) {
    switch (event.keyCode) {
        case 32:
            if (!spaceDown) {
                spaceDown = true;

                // Throw a Lego
                var ballRadius = 5;
                var ballGeometry = new THREE.BoxGeometry(ballRadius*2, 10, 10);
                var ball = new THREE.Mesh(ballGeometry, new THREE.MeshLambertMaterial({
                    color: 0x00FFFF
                }));
                ball.position.set(camera.position.x, camera.position.y, camera.position.z);
                ball.castShadow = true;
                scene.add(ball);

                var directionalVectorDC = new THREE.Vector3(0, 0, 1);
                var velocityVectorWC = directionalVectorDC.unproject(camera);
                velocityVectorWC.normalize();
                velocityVectorWC.multiplyScalar(600);
                physics.addSphereWithVelocity(ball, 1, ballRadius, velocityVectorWC);
            }
            break;
    }
}

function keyUpAction(event) {
    switch (event.keyCode) {
        case 32:
            spaceDown = false;
            break;
    }
}
