const w = 300;
const h = 500;

let bird;

function setup() {
  createCanvas(w, h);
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
