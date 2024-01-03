const w = 300;
const h = 500;

let bird;

function setup() {
  createCanvas(w, h);
  bird = new Bird();

}


function draw() {
  background('black');
  bird.draw();
}



function keyPressed() {
  if (key === "w") {
    bird.fly();
  }
}
