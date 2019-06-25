Sound = function () {

    // Private members
    var audioListener = new THREE.AudioListener();
    var audioLoader = new THREE.AudioLoader();
    var sounds = [];

    // Private methods

    // Public methods
    this.getAudioListener = function () {
        return audioListener;
    }

    this.getSounds = function () {
        return sounds;
    }

    this.addSound = function (visualObject, path, refDistance = 10, cone = false) {

        var sound = new THREE.PositionalAudio(audioListener);

        audioLoader.load(path, function (buffer) {
            sound.setBuffer(buffer);
            sound.setRefDistance(refDistance);
            if (cone) {
                sound.setDirectionalCone(150, 230, 0.5);// inner cone, outer cone, back cone factor
            }
        });
        visualObject.add(sound);
        sounds[path] = sound;
    }
}