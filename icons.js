//Audio Player Icon
_showDialogButton = document.getElementById("show-dialog");
_statusDialog = document.getElementById("dialog-status");
var dialog;
function showDialog() {
  _statusDialog.textContent = "Program running";
  _showDialogButton.disabled = true;
  if (!dialog) {
    var id = "dialog";
    // Instanciate the Dialog Box
    dialog = new DialogBox(id, callbackDialog);
  }
  // Show Dialog Box
  dialog.showDialog();

  // Receive result from Dialog Box
  function callbackDialog(btnName) {
    _showDialogButton.disabled = false;
    _showDialogButton.focus();
    if (btnName == "close") _statusDialog.textContent = "Dialog hidden...";
    else _statusDialog.textContent = btnName + " button clicked...";
  }
}

//About Icon

//Settings Icon
var infoBox;
function showInfo() {
  if (!infoBox) infoBox = new DialogBox("infoBox");
  infoBox.showDialog();
}
