//Gif Array
var bg = [
  "https://media.giphy.com/media/XxHVJxuogNP32/giphy.gif",
  "https://media.giphy.com/media/mlBDoVLOGidEc/giphy.gif",
  "https://media.giphy.com/media/vMSXa7KFGx49aeeXhe/giphy.gif",
  "https://media.giphy.com/media/2eKfFHjb30D9tDdJ59/giphy.gif",
  "https://media.giphy.com/media/2seKKLp1n0sEeJLYTK/giphy.gif",
  "https://media.giphy.com/media/d2NfTnGMMBT8ORweXA/giphy.gif",
  "https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif",
  "https://media.giphy.com/media/55e17EiIUYYTu/giphy.gif",
  "https://media.giphy.com/media/12yMg2IFifCT1C/giphy.gif",
  "https://media.giphy.com/media/nSiNho356rXH2/giphy.gif",
  "https://media.giphy.com/media/fUpvkRuLKE4xMBJLvH/giphy.gif",
  "https://media.giphy.com/media/1zgzISaYrnMAYRJJEr/giphy.gif",
  "https://media.giphy.com/media/3o7qDHKzYpapPQa6S4/giphy.gif",
  "https://media.giphy.com/media/jAe22Ec5iICCk/giphy.gif",
  "https://media.giphy.com/media/hTrZGPtFNfOiPVhXhT/giphy.gif",
  "https://media.giphy.com/media/JEZ3wy3IUQR8s/giphy.gif",
  "https://media.giphy.com/media/13TdMFTIORb9aU/giphy.gif",
];

//Static Background Array
var sbg = [
  "/img/staticbg/classicmango.png",
  "/img/staticbg/delight.png",
  "/img/staticbg/greenrngr.png",
  "/img/staticbg/kamehameha.png",
  "/img/staticbg/plutoe.png",
  "/img/staticbg/sanctum.png",
  "/img/staticbg/nookscranny.png",
  "/img/staticbg/greymatter.png",
];

//Main Variables Background + Slideshow Buttons
var x = 0;
var timer;
const bgswap = document.getElementById("bgswap");
const ssbtn = document.getElementById("ss");

//Main Gif Background Switch -- Refactor = interpolate --
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

//Next Gif -- Refactor --
function nextImage() {
  x = x === bg.length - 1 ? 0 : x + 1;
  document.getElementById("bgswap").style.backgroundImage =
    "url(" + bg[x] + ")";
}

//Previous Gif -- Refactor --
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
