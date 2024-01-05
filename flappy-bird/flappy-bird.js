let W = 300;
let H = 500;
const TITLE_SPACE = 150;
const PIPE_SPACE = 200;
const PIPE_WIDTH = 50;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 30 * 305 / 420;

let bird;
let pipes;
let voegeli;

let imgBackground;
let imgBird;
let imgPipeUp;
let imgPipeDown;
let scoreboard;


function preload() {
  imgBackground = loadImage('images/flappy_bird_backdrop.jpg');
  imgBird = loadImage('images/bird.png');
  imgPipeUp = loadImage('images/pipe-up.png');
  imgPipeDown = loadImage('images/pipe-down.png');
  imgVoegeli = loadImage('images/voegeli.png')
}


function setup() {
  W = windowWidth;
  H = windowHeight - TITLE_SPACE;
  createCanvas(W, H);

  bird = new Bird();
  pipes = new Pipes();
  voegeli = new Voegeli();
  scoreboard = new Scoreboard();
}

function draw() {
  background(imgBackground);
  voegeli.draw();
  pipes.draw();
  bird.draw();
  if (pipes.hits(bird)) {
    bird.gameOver();
  }
  if (pipes.passed(bird)) {
    scoreboard.plus1();
  }
  scoreboard.draw();
}


function reset() {
  bird = new Bird();
  pipes = new Pipes();
  voegeli = new Voegeli();
  loop();
}



function keyPressed() {
  if (key?.toLowerCase() === "w") {
    bird.fly();
  }
  if (key?.toLowerCase() === "s") {
    reset();
  }

}




function touchStarted() {
  bird.fly();
  return false;
}

