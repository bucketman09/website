const audio = document.getElementById("audioPlayer");

function startStop(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
    
}