raycaster = new THREE.Raycaster();

function executeRaycast(event) {

    raycaster.setFromCamera(mousePosition, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {

        var firstHit = intersects[0].object;

        // hier können über die Property.name Dinge passieren -> Folien 5 Seite 11
        //console.log(firstHit.name);

        if (firstHit.name === "head_person"){
            console.log("its moving");
            firstHit.userData.toggleAnimationEndPosition();
            legoPrimitive.head = !legoPrimitive.head;
            window.dispatchEvent(new Event("legoPrimitive"));
        }

        if (firstHit.name === "Head") {
            if (!legoAnimationMixer.existingAction("HeadAction").isRunning()) {
                legoAnimationMixer.existingAction("HeadAction").stop();
                legoAnimationMixer.existingAction("HeadAction").play();
                legoFBX.head = !legoFBX.head;
                window.dispatchEvent(new Event("legoFBX"));
            }
        }
    }
}