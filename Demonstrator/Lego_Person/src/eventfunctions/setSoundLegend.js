function setSoundLegend (event) {

    sound.getSounds()["src/sound/files/legendTrack.mp3"].pause();

    if (legoPrimitive.head){
        console.log("SOUND!")
        sound.getSounds()["src/sound/files/legendTrack.mp3"].setVolume(1);
        sound.getSounds()["src/sound/files/legendTrack.mp3"].setLoop(true);
        sound.getSounds()["src/sound/files/legendTrack.mp3"].play();
        console.log("SOUND");
    }else{
        //Do nothing
    }

}