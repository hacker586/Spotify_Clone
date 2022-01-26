console.log("Welcome to spotify");
//initialize the variable
let songIndex =0;
let audioElement= new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterBackward = document.getElementById('masterBackward');
let masterForward = document.getElementById('masterForward');
let masterFastBackward = document.getElementById('masterFastBackward');
let masterFastForward = document.getElementById('masterFastForward');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementsByClassName('songItemPlay');
let songs = [
    {songname: "Pal Pal Dil ke Pass-original", filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songname: "Ye dil tum bin kahin lagta nhi", filepath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songname: "Jhoka hawa ka aaj bhi,", filepath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songname: "Lag ja gale", filepath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songname: "Abhi na jao chodkar", filepath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songname: "Suna Suna", filepath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songname: "Aaoge jab tum oh saajna", filepath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songname: "Jaane vo kaise log the jinke", filepath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songname: "Dekha ek khwaab to silsile", filepath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songname: "Muskurane ki wajah", filepath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songname;
    element.getElementsByClassName('changeTime').innerText = audioElement.duration;
    // element.getElementsByClassName('timeStrap')[0].innerHTML = songs[i].duration;
});
// let audioElement = new Audio('1.mp3');
masterplay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        // getElementByClassName('gif').opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity =1;
    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        document.getElementsByClassName('songItemPlay').classList.remove('fa-pause');
        document.getElementsByClassName('songItemPlay').classList.add('fa-play');
        gif.style.opacity =0;
    }
});

masterBackward.addEventListener('click', ()=>{
    audioElement.currentTime=0;
})

masterForward.addEventListener('click', ()=>{
    audioElement.currentTime+=10;
})

audioElement.addEventListener('timeupdate', ()=>{
    var progress = ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

// masterFastBackward.addEventListener('click', ()=>{
//     audioElement.songIndex-=1;
//     songname = songs[audioElement.songIndex];
//     audioElement.play();
// })
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        masterSongName.innerText = songs[songIndex].songname;
    })
});
masterFastBackward.addEventListener('click', ()=>{
    if(songIndex>0){
        songIndex--;
        audioElement.src = `songs/${songIndex+1}.mp3`;
    }else{
        songIndex=10;
        audioElement.src= `songs/${songIndex}.mp3`;
    }
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity =1; 
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    masterSongName.innerText = songs[songIndex].songname;
});

masterFastForward.addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 1;
        audioElement.src = `songs/${songIndex}.mp3`;
    }else{
        songIndex++;
        audioElement.src= `songs/${songIndex}.mp3`;
    }
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity =1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause'); 
    masterSongName.innerText = songs[songIndex].songname;
})