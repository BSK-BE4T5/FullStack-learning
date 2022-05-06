
var audioTrack = WaveSurfer.create({
    container: '.audio',
    waveColor: '#fff',
    progressColor: '#7A3AC4',
    barWidth: 1,
    responsive: true,
    barHeight:60,
    hideScrollbar: true,
});

audioTrack.load('Bf.wav');

const playBtn = document.querySelector(".play-btn")

playBtn.addEventListener("click",()=>{
    audioTrack.playPause();

    if (audioTrack.isPlaying()){
        playBtn.classList.add("playing");
        

    }else{
        playBtn.classList.remove("playing");
        
    }
})

audioTrack.setVolume(1.5);

