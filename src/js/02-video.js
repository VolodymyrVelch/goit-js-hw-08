import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

let localStorageTime = localStorage.getItem('videoplayer-current-time');

iframePlayer.setCurrentTime(localStorageTime);
// console.log(localStorageKey);
