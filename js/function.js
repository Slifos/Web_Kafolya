const clickSound = new Audio('../data/click sound.mp3');
const boutons = document.getElementsByClassName('bouton');

for (let i = 0; i < boutons.length; i++) {
  boutons[i].addEventListener('click', function () {
    clickSound.currentTime = 0;
    clickSound.play();
  });
}