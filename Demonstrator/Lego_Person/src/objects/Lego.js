// Das THREE.Legomännchen

Person = function () {

    console.log('Lego-Person');

    var personGroup = new THREE.Group();

    //HEAD
    var headGroup = new THREE.Group();

    var headGeometry = new THREE.CylinderGeometry(30, 30, 50, 32, 1, false);
    var headMaterial = new THREE.MeshLambertMaterial({color:0xFAE7D0});
    var head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 50, 0);

    headGroup.add(head);


    //BODY
    var bodyGroup = new THREE.Group();

    var bodyGeometry = new THREE.BoxGeometry(120, 100, 75);
    var bodyMaterial = new THREE.MeshLambertMaterial({color:0x3399FF});
    var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bodyGroup.add(body);

    personGroup.add(bodyGroup);
    personGroup.add(headGroup);

    return personGroup;

    //ARM_L

    //HAND_L

    //ARM_R

    //HAND_R

    //LEG_L

    //LEG_R

    //FOOT??


}