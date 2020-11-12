//Radio Icon
var radio;
function showRadio() {
  if (!radio) radio = new DialogBox("radio");
  radio.showDialog();
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