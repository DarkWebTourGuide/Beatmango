var bg = [
  "https://media.giphy.com/media/XxHVJxuogNP32/giphy.gif",
  "https://media.giphy.com/media/mlBDoVLOGidEc/giphy.gif",
  "https://media.giphy.com/media/vMSXa7KFGx49aeeXhe/giphy.gif",
  "https://media.giphy.com/media/2seKKLp1n0sEeJLYTK/giphy.gif",
  "https://media.giphy.com/media/d2NfTnGMMBT8ORweXA/giphy.gif",
  "https://media.giphy.com/media/451shsqh5nJ9UqDElR/giphy.gif",
  "https://media.giphy.com/media/1zgzISaYrnMAYRJJEr/giphy.gif",
  "https://media.giphy.com/media/8gOtTSdJk6Y6jw3nNV/giphy.gif",
];

var bgswap = document.getElementById("bgswap");
var x = 0;
var timer;
var ssbtn = document.getElementById("ss");

function displayImage(x) {
  bgswap.style.backgroundImage = "url(" + bg[x] + ")";
}

function startTimer() {
  document.getElementById("ss").innerHTML = "Slideshow.On";
  if (timer) {
    // stop
    clearInterval(timer);
    timer = null;
    document.getElementById("ss").innerHTML = "Slideshow.Off";
  } else {
    timer = setInterval(function () {
      x = x + 1 >= bg.length ? 0 : x + 1;
      displayImage(x);
    }, 4000);
  }
}

//Next Gif
function nextImage() {
  x = x === bg.length - 1 ? 0 : x + 1;
  document.getElementById("bgswap").style.backgroundImage =
    "url(" + bg[x] + ")";
}

//Previous Gif
function previousImage() {
  x = x <= 0 ? bg.length - 1 : x - 1;
  document.getElementById("bgswap").style.backgroundImage =
    "url(" + bg[x] + ")";
}

//Random Gif
function randomImage() {
  x = x === Math.floor(Math.random(bg.length) * 5) + 1;
  document.getElementById("bgswap").style.backgroundImage =
    "url(" + bg[x] + ")";
}
