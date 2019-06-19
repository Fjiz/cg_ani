/*
Berrechnet die MousePosition aus Fensterkoordinaten in Gerätekoodrdinaten
wird für den Raycast benötigt
*/


mousePosition = new THREE.Vector2();

function calculateMousePosition(event) {

    mousePosition.x = 2 * (event.clientX / window.innerWidth) - 1;
    mousePosition.y = -2 * (event.clientY / window.innerHeight) + 1;

//   console.log("X: " + mousePosition.x + " " + "Y: " + mousePosition.y);
}