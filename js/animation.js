const breezFrameCount = 4;
const breezPath = "../data/breez/breez";
let breezFrame = 1;
const breezImg = document.getElementById("breez-anim");

let interval = 150;
let timer = null;

function animateBreez() {
  breezFrame = breezFrame % breezFrameCount + 1;
  breezImg.src = `${breezPath}${breezFrame}.png`;
}

function startAnimation(speed, who) {
  clearInterval(timer);
  timer = setInterval(who, speed);
}

startAnimation(interval);

const breezSection = document.getElementById("breez");
breezSection.addEventListener("mouseenter", () => {
  startAnimation(60, animateBreez);
});
breezSection.addEventListener("mouseleave", () => {
  startAnimation(interval, animateBreez);
});

const peaceguinFrameCount = 6;
const peaceguinPath = "../data/peaceguin/peaceguin";
let peaceguinFrame = 1;
const peaceguinImg = document.getElementById("peaceguin-anim");

let peaceguinInterval = 150;
let peaceguinTimer = null;

function animatePeaceguin() {
  peaceguinFrame = peaceguinFrame % peaceguinFrameCount + 1;
  peaceguinImg.src = `${peaceguinPath}${peaceguinFrame}.png`;
}

function startPeaceguinAnimation(speed) {
  clearInterval(peaceguinTimer);
  peaceguinTimer = setInterval(animatePeaceguin, speed);
}

startPeaceguinAnimation(peaceguinInterval);

const peaceguinSection = document.getElementById("peaceguin");
peaceguinSection.addEventListener("mouseenter", () => {
  startPeaceguinAnimation(60);
});
peaceguinSection.addEventListener("mouseleave", () => {
  startPeaceguinAnimation(peaceguinInterval);
});

const chobushiFrameCount = 4;
const chobushiPath = "../data/chobushi/chobushi";
let chobushiFrame = 1;
const chobushiImg = document.getElementById("chobushi-anim");

let chobushiInterval = 150;
let chobushiTimer = null;

function animateChobushi() {
  chobushiFrame = chobushiFrame % chobushiFrameCount + 1;
  chobushiImg.src = `${chobushiPath}${chobushiFrame}.png`;
}

function startChobushiAnimation(speed) {
  clearInterval(chobushiTimer);
  chobushiTimer = setInterval(animateChobushi, speed);
}

startChobushiAnimation(chobushiInterval);

const chobushiSection = document.getElementById("chobushi");
chobushiSection.addEventListener("mouseenter", () => {
  startChobushiAnimation(60);
});
chobushiSection.addEventListener("mouseleave", () => {
  startChobushiAnimation(chobushiInterval);
});