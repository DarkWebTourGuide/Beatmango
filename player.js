//Global

var iframeElement = document.querySelector("iframe");
var widget1 = SC.Widget(iframeElement);
var widget = null;
var song_indexes = new Array();
var current_index = 0;

//Shuffle On Load
function shuffleButt() {
  widget1.bind(SC.Widget.Events.READY, function () {
    widget1.bind(SC.Widget.Events.FINISH, function () {
      play_next_shuffled_song();
    });

    widget1.getSounds(function (sounds) {
      create_shuffled_indexes(sounds.length);
      play_next_shuffled_song();
    });
  });

  //Next Button Click
  document
    .querySelector("#button_sc_next")
    .addEventListener("click", play_next_shuffled_song);
}

//Next Button Auto Shuffle
function play_next_shuffled_song() {
  if (current_index >= song_indexes.length) {
    current_index = 0;
  }
  var track_number = song_indexes[current_index];
  current_index++;
  widget1.skip(track_number);
  console.log(track_number);
}

//Shuffle Init
function create_shuffled_indexes(num_songs) {
  for (var i = 0; i < num_songs; i++) {
    song_indexes.push(i);
  }
  song_indexes = shuffle(song_indexes);
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) {
  //v1.0
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

//Play/Pause Button
function playPause() {
  var pause = document.getElementById("playpause");
  if (pause.innerHTML === "Pause") {
    widget1.pause();
    pause.innerHTML = "Play";
  } else {
    widget1.play();
    pause.innerHTML = "Pause";
  }
}

//Current Song Data
function currSong() {
  widget1.getCurrentSound(function (sounds) {
    console.log(sounds.title);
    console.log(sounds.artwork_url);
    // document.getElementById("trackart").innerHTML = sounds.artwork_url;
    document.getElementById("tracktitle").innerHTML = sounds.title;
  });
}
