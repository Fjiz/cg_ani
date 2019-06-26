function setSoundLegend (event) {

    sound.getSounds()["src/sound/files/legendTrack.mp3"].pause();

    //Sound for Lego Model
    if (legoPrimitive.head){
        console.log("SOUND!")
        sound.getSounds()["src/sound/files/legendTrack.mp3"].setVolume(1);
        sound.getSounds()["src/sound/files/legendTrack.mp3"].play();
    }else{
        //Do nothing
    }

    //Sound for FBX-Model
    if(legoFBX.head){
        console.log("Other SOUND!");
        sound.getSounds()["src/sound/files/legendTrackFBX.mp3"].setVolume(1);
        sound.getSounds()["src/sound/files/legendTrackFBX.mp3"].play();
    }else{
        //Do Nothing
    }

}