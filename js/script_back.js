// buttonStart.onclick = function() {
//   clearInterval(Interval);
//   Interval = setInterval(startTimer, 10);
// };

// buttonStop.onclick = function() {
//   clearInterval(Interval);
// };

// youtube
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "1xEQydNqaqg",
    playerVars: {
      modestbranding: 0,
      autoplay: 0,
      controls: 0,
      showinfo: 0,
      wmode: "transparent",
      branding: 0,
      rel: 0
      // end: 2
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  $(".lightbox .icon-close").on("click", function() {
    event.target.playVideo();
    // fullScreen();
  });
  // event.target.mute();
}

function fullScreen() {
  var e = document.getElementById("player");
  if (e.requestFullscreen) {
    e.requestFullscreen();
  } else if (e.webkitRequestFullscreen) {
    e.webkitRequestFullscreen();
  } else if (e.mozRequestFullScreen) {
    e.mozRequestFullScreen();
  } else if (e.msRequestFullscreen) {
    e.msRequestFullscreen();
  }
}

var playing = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !playing) {
    // 影片播放
    // playing = true;
  } else if (event.data == YT.PlayerState.PAUSED) {
    // 影片暫停
    // playing = false;
  }

  if (event.data === 0) {
    // 影片播畢
    $(".celebrate").fadeIn(500);
    $(".scene").fadeOut(300);
    // setTimeout(function() {
    //   $(".celebrate").fadeIn(500);
    // }, 200);
  }
}

// stop watch
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonReset = document.getElementById("restart");
var Interval;

function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
if (isMobile()) {
  console.log("mobile");
  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      // console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds >= 2 && tens > 80) {
      $(".lightbox")
        .addClass("failed")
        .fadeIn(500);
    }
  }

  var spinner = document.querySelector("#net");
  var lastRotation = 0;

  TweenLite.set(spinner, {
    rotation: lastRotation
  });

  Draggable.create(spinner, {
    type: "rotation",
    throwProps: true,
    liveSnap: function(value) {
      var delta = value - lastRotation;
      var test = false;
      var target = 360 * 10;
      var percentage = Math.abs(this.rotation / target) * 100;

      lastRotation = value;
      bar.css("width", percentage + "%");

      if (delta > 0) {
        // 順時針
        if (this.rotation >= target) {
          test = true;
          clearInterval(Interval);
          if (seconds < 2 || (seconds == 2 && tens <= 80)) {
            $(".sprinkle").addClass("active");
            setTimeout(function() {
              $(".lightbox")
                .addClass("succeed")
                .fadeIn(350);
            }, 200);
          }
        }
      } else {
        // 逆時針
        if (this.rotation <= target * -1) {
          test = true;
          clearInterval(Interval);
          if (seconds < 2 || (seconds == 2 && tens <= 80)) {
            $(".sprinkle").addClass("active");
            setTimeout(function() {
              $(".lightbox")
                .addClass("succeed")
                .fadeIn(350);
            }, 200);
          }
        }
      }
      return lastRotation;
    },
    onPress: function(e) {
      lastRotation = this.rotation;
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      console.log("on press");
    },
    onDragEnd: function() {
      console.log(seconds + ":" + tens);
    }
  });
} else {
  console.log("desktop");
  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      // console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds >= 4 && tens > 50) {
      $(".lightbox")
        .addClass("failed")
        .fadeIn(500);
    }
  }

  var spinner = document.querySelector("#net");
  var lastRotation = 0;

  TweenLite.set(spinner, {
    rotation: lastRotation
  });

  Draggable.create(spinner, {
    type: "rotation",
    throwProps: true,
    liveSnap: function(value) {
      var delta = value - lastRotation;
      var test = false;
      var target = 360 * 10;
      var percentage = Math.abs(this.rotation / target) * 100;

      lastRotation = value;
      bar.css("width", percentage + "%");

      if (delta > 0) {
        // 順時針
        if (this.rotation >= target) {
          test = true;
          clearInterval(Interval);
          if (seconds < 4 || (seconds == 4 && tens <= 50)) {
            $(".sprinkle").addClass("active");
            setTimeout(function() {
              $(".lightbox")
                .addClass("succeed")
                .fadeIn(350);
            }, 200);
          }
        }
      } else {
        // 逆時針
        if (this.rotation <= target * -1) {
          test = true;
          clearInterval(Interval);
          if (seconds < 4 || (seconds == 4 && tens <= 50)) {
            $(".sprinkle").addClass("active");
            setTimeout(function() {
              $(".lightbox")
                .addClass("succeed")
                .fadeIn(350);
            }, 200);
          }
        }
      }
      return lastRotation;
    },
    onPress: function(e) {
      lastRotation = this.rotation;
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    },
    onDragEnd: function() {
      console.log(seconds + ":" + tens);
    }
  });
}
isMobile();

var bar = $(".bar span"),
  W = $(".bar").width();

buttonReset.onclick = function() {
  console.log("restart");
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  $(".lightbox")
    .removeClass("failed")
    .fadeOut(200);
  $(".sprinkle").removeClass("active");
  TweenMax.set(spinner, { clearProps: "x" });
  // Draggable.get(spinner).kill();
  bar.css("width", "0%");
};

$(".guide .icon-close").on("click", function(e) {
  $(".guide .guide-desc").fadeOut("350");
  $(".guide .guide-finger").fadeIn("100");
  e.preventDefault;
});

$(".guide .btn-start").on("click", function(e) {
  $(".guide").fadeOut("100");
  e.preventDefault;
});

$(".lightbox .icon-close").on("click", function(e) {
  //   window.location.reload();
  console.log("succeed");
  $(".lightbox").fadeOut(350);
  // $(".scene").fadeOut(350);
  setTimeout(function() {
    $(".main-video").fadeIn(800);
  }, 100);
  // return false;
  // e.preventDefault;
});
