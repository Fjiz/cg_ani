Person = function () {

    console.log('Lego-Person!!!');

    //Full Lego
    var personGroup = new THREE.Group();

    //Materials
    var skinMaterial = new THREE.MeshLambertMaterial({color:0xFFD700});
    var topMaterial = new THREE.MeshLambertMaterial({color:0x6969FF});
    var bottomMaterial = new THREE.MeshLambertMaterial({color:0x696969});


    //Full HEAD
    var headGroup = new THREE.Group();

    //HAIR
    var hairGemoetry = new THREE.CylinderGeometry(11.5, 11.5, 9, 32, 1, false);
    var hair = new THREE.Mesh(hairGemoetry, skinMaterial);
    hair.position.set(0, 197, 0);
    hair.castShadow = true;
    headGroup.add(hair);

    //FACE
    var headGeometry = new THREE.SphereGeometry(30, 32, 3);
    var head = new THREE.Mesh(headGeometry, skinMaterial);
    head.castShadow = true;
    head.position.set(0, 171.25, 0);
    headGroup.add(head);

    //NECK
    var neckGemoetry = new THREE.CylinderGeometry(15.5, 15.5, 6, 32, 1, false);
    var neck = new THREE.Mesh(neckGemoetry, skinMaterial);
    neck.position.set(0, 147, 0);
    neck.castShadow = true;
    headGroup.add(neck);

    //Full BODY
    var bodyGroup = new THREE.Group();

    //Build a TRUNCATED PYRAMID and add to body
    var bodyShape = new THREE.Shape();
    bodyShape.moveTo(-38, 0);
    bodyShape.lineTo(-28, 64);
    bodyShape.lineTo(28, 64);
    bodyShape.lineTo(38, 0);
    bodyShape.lineTo(-38, 0);

    var bodyExtrudeSetting = {
        steps: 1,
        depth: 39,
        bevelEnabled: true,
        bevelSize: 1,
        bevelThickness: 2
    }

    var bodyGeometry = new THREE.ExtrudeGeometry(bodyShape, bodyExtrudeSetting);
    var body = new THREE.Mesh(bodyGeometry, topMaterial);
    body.castShadow = true;
//    body.receiveShadow = true;
    body.position.set(0, 80, -19.5);
    bodyGroup.add(body);

    //BELT with a different Material to differ
    var beltGeometry = new THREE.BoxGeometry(73, 11, 39);
    var beltMaterial = new THREE.MeshLambertMaterial({color:0x69697A});
    var belt = new THREE.Mesh(beltGeometry, beltMaterial);
    belt.position.set(0, 74.5, 0);
    belt.castShadow =true;
    bodyGroup.add(belt);

    //Full ARM
    var armGroup = new THREE.Group();

    //Each side has their own Group
    var leftArm = new THREE.Group();
    var rightArm = new THREE.Group();

    //SHOULDER_L
    var shoulderGeometry = new THREE.SphereGeometry(14, 32, 32);
    var shoulderL = new THREE.Mesh(shoulderGeometry, topMaterial);
    shoulderL.position.set(33, 127, 0);
    shoulderL.castShadow =true;
    leftArm.add(shoulderL);

    //SHOULDER_R
    var shoulderR = new THREE.Mesh(shoulderGeometry, topMaterial);
    shoulderR.position.set(-33, 127, 0);
    shoulderR.castShadow = true;
    rightArm.add(shoulderR);

    //ARM_L
    var armGeometry = new THREE.CylinderGeometry(7, 12, 43, 32, 1, false);
    var armL = new THREE.Mesh(armGeometry, topMaterial);
    armL.position.set(39, 108, 0);
    armL.castShadow = true;
    leftArm.add(armL);

    //ARM_R
    var armR = new THREE.Mesh(armGeometry, topMaterial);
    armR.position.set(-39, 108, 0);
    armR.castShadow =true;
    rightArm.add(armR);

    //WRIST_L
    var wristL = new THREE.Mesh(wristGeometry, skinMaterial);
    wristL.position.set(39, 86, 1);
    wristL.castShadow =true;
    leftArm.add(wristL);

    //WRIST_R
    var wristGeometry = new THREE.CylinderGeometry(7, 7, 9, 32, 1, false);
    var wristR = new THREE.Mesh(wristGeometry, skinMaterial);
    wristR.position.set(-39, 86, 1);
    wristR.castShadow = true;
    rightArm.add(wristR);

    //HANDSHAPE
    var handShape = new THREE.Shape();
    //Outter Hand
    handShape.moveTo(-8, 0);
    handShape.lineTo(-10, 0);
    handShape.lineTo(-14, 4);
    handShape.lineTo(-14, 12);
    handShape.lineTo(-9, 17);
    handShape.lineTo(0, 20);
    handShape.lineTo(9, 17);
    handShape.lineTo(14, 12);
    handShape.lineTo(14, 4);
    handShape.lineTo(10, 0);
    handShape.lineTo(8, 0);
    //Inner Hand
    handShape.lineTo(10, 6);
    handShape.lineTo(10, 9);
    handShape.lineTo(7, 14);
    handShape.lineTo(0, 17);
    handShape.lineTo(-7, 14);
    handShape.lineTo(-10, 9);
    handShape.lineTo(-10, 6);
    handShape.lineTo(-8, 0);

    var handExtrudeSetting = {
        steps: 1,
        depth: 23,
        bevelEnabled: false,
    };

    var handGeometry = new THREE.ExtrudeGeometry(handShape, handExtrudeSetting);

    //HAND_L
    var handL = new THREE.Mesh(handGeometry, skinMaterial);
    handL.position.set(39, 64, -10);
    handL.castShadow =true;
    leftArm.add(handL);

    //HAND_R
    var handR = new THREE.Mesh(handGeometry, skinMaterial);
    handR.position.set(-39, 64, -10);
    handR.castShadow =true;
    rightArm.add(handR);

    //ARMS need to be adjust to the body
    leftArm.rotation.z = 20 * DEG_TO_RAD;
    rightArm.rotation.z = -20 * DEG_TO_RAD;
    leftArm.position.x = 43;
    rightArm.position.x = -43;

    armGroup.add(leftArm);
    armGroup.add(rightArm);
    bodyGroup.add(armGroup);

    //Full BOTTOM
    var bottomGroup = new THREE.Group();

    //THIGH
    var thighGeometry = new THREE.CylinderGeometry(18, 18, 74, 32, 1, false);
    var thigh = new THREE.Mesh(thighGeometry, bottomMaterial);
    thigh.rotation.z = 90 * DEG_TO_RAD;
    thigh.position.set(0, 56, -2);
    thigh.castShadow =true;
    bottomGroup.add(thigh);

    //LEG_L
    var legGeometry = new THREE.BoxGeometry(33, 46, 29);
    var legL = new THREE.Mesh(legGeometry, bottomMaterial);
    legL.position.set(20.5, 29.5, -4.5);
    legL.castShadow =true;
    bottomGroup.add(legL);

    //LEG_R
    var legR = new THREE.Mesh(legGeometry, bottomMaterial);
    legR.position.set(-20.5, 29.5, -4.5);
    legR.castShadow =true;
    bottomGroup.add(legR);

    //FOOT_L
    var footGeometry = new THREE.BoxGeometry(33, 16.5, 38);
    var footL = new THREE.Mesh(footGeometry, bottomMaterial);
    footL.position.set(20.5, 8.25, 0);
    footL.castShadow =true;
    bottomGroup.add(footL);

    //FOOT_R
    var footR = new THREE.Mesh(footGeometry, bottomMaterial);
    footR.position.set(-20.5, 8.25, 0);
    footR.castShadow =true;
    bottomGroup.add(footR);

    //ADD HEAD, BODY (w/ ARMS) and BOTTOM to PERSON
    personGroup.add(headGroup);
    personGroup.add(bodyGroup);
    personGroup.add(bottomGroup);

    return personGroup;
}