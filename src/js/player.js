// let player;
// const playerContainer = $(".player");
// const playerStart = $(".player__start");
// const playerSplash = $(".player__splash");
// ////play/pause////

// ////seconds to seconds:minutes////
// const formatTime = (timeSec) => {
//   const roundTime = Math.round(timeSec);

//   const minutes = addZero(Math.floor(roundTime / 60));
//   const seconds = addZero(roundTime - minutes * 60);

//   function addZero(num) {
//     return num < 10 ? `0${num}` : num;
//   }

//   return `${minutes} : ${seconds}`;
// };
// ////^seconds to seconds:minutes////

// ////duration////
// const onPlayerReady = () => {
//   const durationSec = player.getDuration();

//   $(".player__duration-estimate").text(formatTime(durationSec));
//   if (typeof interval !== "undefined") {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => {
//     const completedSec = player.getCurrentTime();
//     const completedPercent = (completedSec / durationSec) * 100;
//     $(".player__playback-button").css({
//       left: `${completedPercent}%`,
//     });
//     $(".player__duration-completed").text(formatTime(completedSec));
//   }, 1000);
// };
// ////^duration////

// ////playbackButtonMove////
// $(".player__playback").click((e) => {
//   const bar = $(e.currentTarget);
//   const clickedPosition = e.originalEvent.layerX;
//   const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
//   const newPlaybackPositionSec =
//     (player.getDuration() / 100) * newButtonPositionPercent;

//   $(".player__playback-button").css({
//     left: `${newButtonPositionPercent}%`,
//   });

//   player.seekTo(newPlaybackPositionSec);
// });
// ////^playbackButtonMove////

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("yt-player", {
//     height: "405",
//     width: "660",
//     videoId: "TxZwqVTaCmA",
//     events: {
//       onReady: onPlayerReady,
//       // onStateChange: onPlayerStateChange
//     },
//     playerVars: {
//       controls: 0,
//       disablekb: 0,
//       shoinfo: 0,
//       rel: 0,
//       autoplay: 0,
//       modestbranding: 0,
//     },
//   });
// }
// let eventsInit = () => {
//   $(".player__start").click((e) => {
//     e.preventDefault();
//     if (playerStart.hasClass("player__start--paused")) {
//       playerStart. oveClass("player__start--paused");
//       playerSplash. oveClass("player__splash--active");
//       player.pauseVideo();
//     } else {
//       playerStart.addClass("player__start--paused");
//       playerSplash.addClass("player__splash--active");
//       player.playVideo();
//     }
//   });
// };
// ////^play/pause////

// eventsInit();

//videoplayer
const player = $("#video-player")[0];
const playerContainer = $(".player");
const playerStart = $(".player__start");
const playerSplash = $(".player__splash");
const volumeButton = $(".player__volume-ico");
const volumeLevel = $(".player__volume-input");
let interval;
let videoDuration = 0;


//уровень громкости
const changeVolume = () => {
  player.volume = volumeLevel[0].value / 10;
};

volumeLevel.on("click", changeVolume);
volumeLevel.on("mouseup", changeVolume);
volumeLevel[0].min = 0;
volumeLevel[0].max = 10;
volumeLevel[0].value = volumeLevel[0].max;
//уровень громкости

//кнопка громкости
const soundOf = () => {
  if (player.volume === 0) {
    player.volume = soundLevel;
    volumeLevel[0].value = volumeLevel[0].max;
    volumeButton[0].innerHTML = "<use xlink:href=\"./img/sprite.svg#btn-volume\"></use>"
    volumeButton.value = soundLevel * 10;
  } else {
    soundLevel = player.volume;
    player.volume = 0;
    volumeButton[0].innerHTML = "<use xlink:href=\"./img/sprite.svg#volume-off\"></use>"
    volumeLevel[0].value = volumeLevel[0].min;
    volumeButton.value = 0;
  }
};

volumeButton.on("click", (e) => {
  soundOf();

});
//кнопка кгросомти


player.addEventListener("loadeddata", () => {
  videoDuration = player.duration;
  $(".player__duration-estimate").text(formatTime(videoDuration));
});

const formatTime = (timeSec) => {
  const roundTime = Math.round(timeSec);

  const minutes = addZero(Math.floor(roundTime / 60));
  const seconds = addZero(roundTime - minutes * 60);

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return `${minutes} : ${seconds}`;
};

const onPlayerReady = () => {
  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    const completedSec = player.currentTime;
    const completedPercent = (completedSec / videoDuration) * 100;
    $(".player__playback-button").css({
      left: `${completedPercent}%`,
    });
    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
};

$(".player__playback").on("click", (e) => {
  const bar = $(e.currentTarget);
  const clickedPosition = e.originalEvent.layerX;
  const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
  const newPlaybackPositionSec =
    (player.duration / 100) * newButtonPositionPercent;

  $(".player__playback-button").css({
    left: `${newButtonPositionPercent}%`,
  });

  player.currentTime = newPlaybackPositionSec;
});

let eventsInit = () => {
  $(".player__start").on("click", (e) => {
    e.preventDefault();
    if (playerStart.hasClass("player__start--paused")) {
      playerStart.removeClass("player__start--paused");
      playerSplash.removeClass("player__splash--active");
      player.pause();
    } else {
      playerStart.addClass("player__start--paused");
      playerSplash.addClass("player__splash--active");
      player.play();
    }
  });
};

eventsInit();
onPlayerReady();
// document.addEventListener('DOMContentLoaded', ready);
