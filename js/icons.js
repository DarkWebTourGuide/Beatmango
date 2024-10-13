//Radio Icon
var radio
var radioInitialized = false;

function showRadio() {
  if (!radio) radio = new DialogBox("radio");
  radio.showDialog();
  
  if (!radioInitialized) {
    shuffleButt();
    currSong();
    radioInitialized = true;
  }
}

//Settings Icon
var settings;
function showSettings() {
  if (!settings) settings = new DialogBox("settings");
  settings.showDialog();
}

//About Icon
var about;
function showAbout() {
  if (!about) about = new DialogBox("about");
  about.showDialog();
}

// Donate Icon
var dono;
function showDono() {
  if (!dono) dono = new DialogBox("dono");
  dono.showDialog();
}

// Lyri Icon
var lyri;
function showLyri() {
  if (!lyri) lyri = new DialogBox("lyri");
  lyri.showDialog();
}

// Focus Icon
var focusIcon;
function showFocusIcon() {
  if (!focusIcon) focusIcon = new DialogBox("focus");
  focusIcon.showDialog();
}

// TV Icon
var tvIcon;
function showTvIcon() {
  if (!tvIcon) tvIcon = new DialogBox("tv");
  tvIcon.showDialog();
}

// Playlist Icon
var playlistIcon;
function showplaylistIcon() {
  if (!playlistIcon) playlistIcon = new DialogBox("playlist");
  playlistIcon.showDialog();
}

//Update Popup
var update;
function showUpdate() {
  if (!update) update = new DialogBox("update");
  update.showDialog();
}




//Possible Future Icons

//Zenmode Icon - Breathing Timer
//WorkMode Icon - Pomodoro Timer
//BreakMode Icon - Relaxing Click Game
//TV Icon - Retro Videos from the 80's
//Top Songs Icon - List of Top Songs
//Playlists Icon - Select Your Choice of Playlist