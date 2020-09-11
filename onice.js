// //Audio Player Icon
// _showDialogButton = document.getElementById("show-radio");

// var dialog;
// function showDialog() {
//   console.log("Radio Currently Running");
//   _showDialogButton.disabled = true;
//   if (!dialog) {
//     var id = "radio";
//     // Instanciate the Dialog Box
//     dialog = new DialogBox(id, callbackDialog);
//   }
//   // Show Dialog Box
//   dialog.showDialog();

//   // Receive result from Dialog Box
//   function callbackDialog(btnName) {
//     _showDialogButton.disabled = false;
//     _showDialogButton.focus();
//     if (btnName == "close") console.log("Radio Window Closed");
//     else console.log(" Radio Window Closed");
//   }
// }

// //Settings Icon
// _showDialogButton = document.getElementById("show-settings");

// var dialog;
// function showInfo() {
//   console.log("Settings Currently Running");
//   _showDialogButton.disabled = true;
//   if (!dialog) {
//     var id = "settings";
//     // Instanciate the Dialog Box
//     dialog = new DialogBox(id, callbackDialog);
//   }
//   // Show Dialog Box
//   dialog.showInfo();

//   // Receive result from Dialog Box
//   function callbackDialog(btnName) {
//     _showDialogButton.disabled = false;
//     _showDialogButton.focus();
//     if (btnName == "close") console.log("Settings Window Closed");
//     else console.log(" Settings Window Closed");
//   }
// }

// BTN SET UP
//       <div class="buttonpane">
// <div class="buttonset">
// <button name="ok">OK</button>
// <button name="cancel">Cancel</button>
// </div>
// </div>

// <!--Radio Icon-->
// <button
//   id="show-radio"
//   class="radioiconbutton"
//   onclick="showRadio();"
// ></button>
// <!--About Icon-->
// <button
//   id="show-about"
//   class="abouticonbutton"
//   onclick="showAbout();"
// ></button>
// <!--Settings Icon-->
// <button
//   id="show-settings"
//   class="settingsiconbutton"
//   onclick="showSettings();"
// ></button>
