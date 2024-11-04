let fon = document.getElementById("page");
fon.className = sessionStorage.getItem("font");

function changeFont() {
    if (fon.className == "roman") {
      fon.className = 'comic';
      sessionStorage.setItem("font", "comic");
    } else {
      fon.className = 'roman';
      sessionStorage.setItem("font", "roman")
    }
  }

function playMusic(id) {
    var audio = document.getElementById(id);
    if (audio.classList.contains('playing') == true) {
      audio.pause();
      audio.classList.remove('playing');
    } else {
      audio.play();
      audio.classList.add('playing');
    }
}