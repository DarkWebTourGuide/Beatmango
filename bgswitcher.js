//Gif Array
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

//Static Background Array
var sbg = [
  "Assets/staticbg/classicmango.png",
  "Assets/staticbg/delight.png",
  "Assets/staticbg/greenrngr.png",
  "Assets/staticbg/kamehameha.png",
  "Assets/staticbg/plutoe.png",
  "Assets/staticbg/sanctum.png",
  "Assets/staticbg/nookscranny.png",
  "Assets/staticbg/greymatter.png",
];

//Main Variables
var x = 0;
var timer;
const bgswap = document.getElementById("bgswap");
const ssbtn = document.getElementById("ss");

//Main Gif Background Switch
function displayImage(x) {
  bgswap.style.backgroundImage = "url(" + bg[x] + ")";
}

//Slideshow Gif Activation - Deactivation
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
  x = x === bg.length;
  document.getElementById("bgswap").style.backgroundImage =
    "url(" + bg[Math.floor(Math.random() * bg.length)] + ")";
}

//Main Static Background Switch
function displayStatic(x) {
  bgswap.style.backgroundImage = "url(" + sbg[x] + ")";
}
