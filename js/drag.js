// $("#square").draggable({
//   start: function() {},
//   drag: function(e) {
//     var x = e.clientX,
//       y = e.clientY;
//     // var radians = Math.atan2(x - 10, y - 10);
//     var radians = Math.atan2(x, y);
//     // var degree = radians * (180 / Math.PI) - 90;
//     // var degree = (radians * 180) / Math.PI + 90;
//     console.log(degree);

//     $(this).css("-webkit-transform", "rotate(" + degree + "deg)");
//     // console.log("X: " + x + ", Y: " + y);
//     // console.log("-");
//   },
//   stop: function() {}
// });

var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
// var buttonStart = document.getElementById("button-start");
// var buttonStop = document.getElementById("button-stop");
// var buttonReset = document.getElementById("button-reset");
var Interval;

// buttonStart.onclick = function() {
//   clearInterval(Interval);
//   Interval = setInterval(startTimer, 10);
// };

// buttonStop.onclick = function() {
//   clearInterval(Interval);
// };

// buttonReset.onclick = function() {
//   clearInterval(Interval);
//   tens = "00";
//   seconds = "00";
//   appendTens.innerHTML = tens;
//   appendSeconds.innerHTML = seconds;
// };

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

var spinner = document.querySelector("#square");
// var lastRotation = 45;
var lastRotation = 0;

TweenLite.set(spinner, {
  rotation: lastRotation
});

Draggable.create(spinner, {
  type: "rotation",
  liveSnap: function(value) {
    var delta = value - lastRotation;
    var test = false;
    lastRotation = value;

    if (delta > 0) {
      // console.log("1");
      // 順時針
      if (this.rotation > 360 * 5) {
        test = true;
        // document.querySelector("#desc").innerText = "good!";
        clearInterval(Interval);
        $(".lightbox").fadeIn(500);
      } else {
        document.querySelector("#desc").innerText = "";
      }
    } else {
      // 逆時針
      // console.log("2");
      if (this.rotation < 360 * 5 * -1) {
        test = true;
        // document.querySelector("#desc").innerText = "!good!";
        clearInterval(Interval);
        $(".lightbox").fadeIn(500);
      } else {
        document.querySelector("#desc").innerText = "";
      }
    }
    return lastRotation;

    // return delta > 0 ? this.rotation + delta : this.rotation;
  },
  onPress: function() {
    lastRotation = this.rotation;
    // console.log("on press");
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
});

$(".lightbox .icon-close").on("click", function(e) {
  $(".lightbox").fadeOut("350");
  return false;
  e.preventDefault;
});
