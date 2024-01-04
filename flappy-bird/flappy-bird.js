let W = 300;
let H = 500;
const TITLE_SPACE = 150;

let bird;

function setup() {
  W = windowWidth;
  H = windowHeight - TITLE_SPACE;
  createCanvas(W, H);

  bird = new Bird();

}

function reset() {
  bird = new Bird();
  loop();
}


function draw() {
  background('black');
  bird.draw();
}



function keyPressed() {
  if (key === "w") {
    bird.fly();
  }
  if (key === "s") {
    reset();
  }

}


function keyReleased() {
  if (key === "w") {
    bird.gravityOn();
  }
}

function touchStarted() {
  bird.fly();
  return false;
}

function touchEnded(fxn) {
  bird.gravityOn();
  return false;
}