let W = 300;
let H = 500;
const TITLE_SPACE = 150;
const PIPE_SPACE = 200;
const PIPE_WIDTH = 30;

let bird;
let pipes;

function setup() {
  W = windowWidth;
  H = windowHeight - TITLE_SPACE;
  createCanvas(W, H);

  bird = new Bird();
  pipes = new Pipes();


}

function draw() {
  background('black');
  pipes.draw();
  bird.draw();
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

