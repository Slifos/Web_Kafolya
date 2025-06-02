function animateCharacter(imgId, frameCount, path, interval = 300, hoverSelector = null, hoverSpeed =80) {
  const img = document.getElementById(imgId);
  if (!img) return;
  let frame = 1;
  let timer = null;

  function animate() {
    frame = frame % frameCount + 1;
    img.src = `${path}${frame}.png`;
  }

  function start(speed) {
    clearInterval(timer);
    timer = setInterval(animate, speed);
  }

  start(interval);

  if (hoverSelector) {
    const section = document.getElementById(hoverSelector);
    if (section) {
      section.addEventListener("mouseenter", () => start(hoverSpeed));
      section.addEventListener("mouseleave", () => start(interval));
    }
  }
}


animateCharacter("breez-anim", 4, "../data/breez/breez", 150, "breez");
animateCharacter("peaceguin-anim", 6, "../data/peaceguin/peaceguin", 150, "peaceguin");
animateCharacter("chobushi-anim", 4, "../data/chobushi/chobushi", 150, "chobushi");
animateCharacter("breez-anim-main", 4, "../data/breez/breez");