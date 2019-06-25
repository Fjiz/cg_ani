function setSound (event) {

    sound.getSounds()["src/sound/files/awesome.mp3"].pause();

    if (cameraMusic.background){
        console.log("SOUND!")
        sound.getSounds()["src/sound/files/awesome.mp3"].setVolume(0.5);
        sound.getSounds()["src/sound/files/awesome.mp3"].setLoop(true);
        sound.getSounds()["src/sound/files/awesome.mp3"].play();
        console.log("SOUND");
    }else{
        //Do nothing
    }

}