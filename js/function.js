

function goDown(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

}
function playSound1(){
  const clickSound = new Audio('../data/click sound.mp3');
  clickSound.currentTime = 0;
  clickSound.play(); // Réinitialiser le son
}
function playSound2(){
  const clickSound = new Audio('../data/pressed.mp3');
  clickSound.currentTime = 0;
  clickSound.play(); // Réinitialiser le son
}


function playVideo(type) {
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(video => {
    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
  });
  let Video = null;
  console.log("ça marche")
  if (type == "auto-breez") {
    Video = document.getElementById('auto-breez');
    console.log("çaaa marche2")
  }
  else if( type == "GBDF-breez") {
    Video = document.getElementById('GBDF-breez');
  }
  else if (type == "aire-breez") {
    Video = document.getElementById('aire-breez');
  }
  else if (type == "peaceguin-auto") {
    Video = document.getElementById('peaceguin-auto');
  }
  else if (type == "peaceguin-wall") {
    Video = document.getElementById('peaceguin-wall');
  }
  else if (type == "peaceguin-dash") {
    Video = document.getElementById('peaceguin-dash');
  }
  else if (type == "chobushi-auto") {
    Video = document.getElementById('chobushi-auto');
  }
  else if (type == "chobushi-launch") {
    Video = document.getElementById('chobushi-launch');
  }
  else if (type == "chobushi-contre") {
    Video = document.getElementById('chobushi-contre');
  }
  if (Video) {
    console.log("ça marche3")
    Video.style.display = 'block';
    Video.currentTime = 0;
    Video.play();
    Video.controls = false; // Vidéo non modifiable

    // Quand la vidéo se termine, on la masque
    Video.onended = function() {
      Video.style.display = 'none';
    };
    Video.onclick = function() {
      
      Video.style.display = 'none';
    };
  }
}

