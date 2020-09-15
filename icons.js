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

//Welcome
var welcome;
function showWelcome() {
  if (!welcome) welcome = new DialogBox("welcome");
  welcome.showDialog();
}
//TV Icon
//Top Songs Icon
//Playlists Icon
//Zenmode Icon
//WorkMode Icon
//BreakMode Icon
