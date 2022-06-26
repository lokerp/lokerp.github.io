let musicArray = [
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: 'https://imgur.com/qUSD1so',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: './music/images/Chopper.jpg',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: './music/images/Chopper.jpg',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: './music/images/Chopper.jpg',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: './music/images/Chopper.jpg',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: './music/images/Chopper.jpg',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
    {
        name: 'Chopper',
        author: 'Lokerp',
        duration: '2:13',
        youtubeLink: 'https://www.youtube.com/watch?v=E6cZHbp14bI',
        imageLink: './music/images/Chopper.jpg',
        mp3Link: './music/mp3/Chopper.mp3'
    },
    {
        name: 'Burnout',
        author: 'Lokerp',
        duration: '1:49',
        youtubeLink: 'https://www.youtube.com/watch?v=YCNlSaOBoOc',
        imageLink: './music/images/Burnout.jpg',
        mp3Link: './music/mp3/Burnout.mp3'
    },
]

const volumeInput = document.querySelector('.volume_input');
const audio = document.querySelector('#audio');
const vol0 = document.querySelector('.volume-0');
const vol1 = document.querySelector('.volume-1');
const vol2 = document.querySelector('.volume-2');
const play = document.querySelector('.play_button');
const pause = document.querySelector('.pause_button');
const progressBar = document.querySelector('.progress_bar');
const progressFilled = document.querySelector('.progress_bar_filled');
const musicWrapper = document.querySelector('.music_wrapper');
const trackName = document.querySelector('.track_name');
const trackAuthor = document.querySelector('.track_author');
const trackDuration = document.querySelector('.track_duration');
const trackLogo = document.querySelector('.track_logo');
const downloadTrack = document.querySelector('.download_track');
const musicOnPage = 10;
const musicOnSearchPage = 25;
const pageRight = document.querySelector('.right_page_link');
const pageLeft = document.querySelector('.left_page_link');
const arrows = document.querySelectorAll('.arrows_wrapper path');
const form = document.querySelector('.form');
const currentUrl = new URL(window.location.href);


let savedVolume = localStorage.getItem('volume') || 100;
let isPaused = true;
let mousedown = false;
let currentPage = currentUrl.searchParams.get('page') ? currentUrl.searchParams.get('page') : 0;

volumeInput.value = savedVolume;
audio.volume = savedVolume / 100;

function changeVolume(e){
    const currentVolume = volumeInput.value;
    localStorage.setItem('volume', currentVolume);
    if(currentVolume >= 51){
        vol0.classList.add('volume_hidden');
        vol1.classList.add('volume_hidden');
        vol2.classList.remove('volume_hidden');
    }

    else if(currentVolume <= 50 && currentVolume != 0){
        vol0.classList.add('volume_hidden');
        vol1.classList.remove('volume_hidden');
        vol2.classList.add('volume_hidden');
    }
    
    else{
        vol0.classList.remove('volume_hidden');
        vol1.classList.add('volume_hidden');
        vol2.classList.add('volume_hidden');
    }
    audio.volume = currentVolume / 100;
}

function playAudio(){
    audio.play();
    play.classList.add('volume_hidden');
    pause.classList.remove('volume_hidden');
    isPaused = false;
}

function pauseAudio(){
    audio.pause();
    play.classList.remove('volume_hidden');
    pause.classList.add('volume_hidden');
    isPaused = true;
}

function handleProgress() {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
  }

function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
}

function musicChosen(e){
    if(currentPage > -1 && currentPage <= musicArray.length / 10 && e.target !== null){
        pauseAudio();
        const target = musicArray[e.target.getAttribute('music-data')];
        audio.src = target.mp3Link;
        trackName.textContent = target.name;
        trackName.href = target.youtubeLink;
        trackAuthor.textContent = target.author;
        trackDuration.textContent = target.duration;
        trackLogo.alt = `${target.author} - ${target.name}`;
        trackLogo.src = target.imageLink;
        downloadTrack.href = target.mp3Link;
        if(!e?.isDecorate){playAudio();}
    }
}

function addMusic(start=0, end=musicOnPage){
    if(end > musicArray.length){
        end = musicArray.length;
    }
    if(start > -1){
        for(let i = start; i < end; i++){
            let musicItem = musicArray[i];
            musicWrapper.innerHTML += `
        <div class="music_item" music-data=${i}>
            <img src="${musicItem.imageLink}" alt="${musicItem.author} - ${musicItem.name}" class="music_item_image" music-data=${i}>
            <div class="music_item_info" music-data=${i}>
                <span class="music_item_name" music-data=${i}>${musicItem.name}</span>
                <span class="music_item_author" music-data=${i}>${musicItem.author}</span>
                <span class="music_item_duration" music-data=${i}>${musicItem.duration}</span>
            </div>
        </div>`;
        }
        for(let musicItem of document.querySelectorAll('.music_item')){
            musicItem.addEventListener('click', musicChosen);
        }
    }
}

function generateLinks(){
    if(currentPage * musicOnPage < musicArray.length - 10){
        currentUrl.searchParams.delete("page");
        currentUrl.searchParams.append("page", +currentPage+1);
        pageRight.href = currentUrl;
    }
    else{
        arrows[1].style.color = '#fff';
    }
    if(currentPage > 0){
        currentUrl.searchParams.delete("page");
        currentUrl.searchParams.append("page", currentPage-1);
        pageLeft.href = currentUrl;
    }
    else{
        arrows[0].style.color = '#fff';
    }
}

function search(e){
    e.preventDefault();
    const keyParams = document.querySelector('.text_input:not([class*="hidden"])').value;
    if(keyParams == ' ' || keyParams == ''){
        window.location.href = 'https://lokerp.github.io/nocopyright/';
    }
    else{
        window.location.href = `http://lokerp.github.io/nocopyright/?q=${keyParams}`;
    }
}

function searchAndAddResults(){
    pageRight.style.display = 'none';
    pageLeft.style.display = 'none';
    const keyWord = currentUrl.searchParams.get('q');
    const regex = new RegExp(keyWord, 'i');
    document.querySelector('.text_input:not([class*="hidden"])').value = keyWord;
    for(let i = 0; i < musicArray.length; i++){
        const musicItem = musicArray[i];
        if(musicItem.name.search(regex) != -1){
        musicWrapper.innerHTML += `
        <div class="music_item" music-data=${i}>
            <img src="${musicItem.imageLink}" alt="${musicItem.author} - ${musicItem.name}" class="music_item_image" music-data=${i}>
            <div class="music_item_info" music-data=${i}>
                <span class="music_item_name" music-data=${i}>${musicItem.name}</span>
                <span class="music_item_author" music-data=${i}>${musicItem.author}</span>
                <span class="music_item_duration" music-data=${i}>${musicItem.duration}</span>
            </div>
        </div>`;
        }
        for(let musicItem of document.querySelectorAll('.music_item')){
            musicItem.addEventListener('click', musicChosen);
        }
    }
}

if(!currentUrl.searchParams.get('q')){
    generateLinks();
    addMusic(currentPage * musicOnPage, (+currentPage + 1) * musicOnPage); 
}
else{ searchAndAddResults();}

musicChosen({target: document.querySelector('.music_item'), isDecorate:true});

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      event.preventDefault();
      if(isPaused){playAudio();}
      else{pauseAudio();}
    }
});



progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);
audio.addEventListener('timeupdate', handleProgress);
play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
audio.addEventListener('ended', pauseAudio);
volumeInput.addEventListener('change', changeVolume);

form.addEventListener('submit', search);
