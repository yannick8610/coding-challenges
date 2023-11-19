const w = 600;
const h = 400;
const d = 20;

function setup() {
  createCanvas(w, h);
  background(0, 0, 0);

  noFill();
  stroke(255);
  strokeWeight(1)
  rect(d, d, w - 2 * d, h - 2 * d, 10);
  line(w / 2, d, w / 2, h - d);
}

function draw() {
}

