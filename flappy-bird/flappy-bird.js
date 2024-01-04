let W = 300;
let H = 500;
const TITLE_SPACE = 150;
const PIPE_SPACE = 200;
const PIPE_WIDTH = 50;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 30 * 305 / 420;

let bird;
let pipes;
let imgBackground;
let imgBird;
let imgPipeUp;
let imgPipeDown;

function preload() {
  imgBackground = loadImage('images/flappy_bird_backdrop.jpg');
  imgBird = loadImage('images/bird.png');
  imgPipeUp = loadImage('images/pipe-up.png');
  imgPipeDown = loadImage('images/pipe-down.png');
}

function setup() {
  W = windowWidth;
  H = windowHeight - TITLE_SPACE;
  createCanvas(W, H);

  bird = new Bird();
  pipes = new Pipes();
}

function draw() {
  background(imgBackground);
  pipes.draw();
  bird.draw();
  if (pipes.hits(bird)) {
    bird.gameOver();
  }
}


function reset() {
  bird = new Bird();
  pipes = new Pipes();
  loop();
}



function keyPressed() {
  if (key === "w") {
    bird.fly();
  }
  if (key === "s") {
    reset();
  }

}




function touchStarted() {
  bird.fly();
  return false;
}

