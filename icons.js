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
