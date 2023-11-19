const w = 600;
const h = 400;
const d = 20;
const playerDistance = w / 2 / 6;

let playerLeft;
let playerRight;
let plan;

function setup() {
  createCanvas(w, h);

  plan = new GamePlan(d, d, w - 2 * d, h - 2 * d);
  playerLeft = new Player(plan, playerDistance, h / 2, true);
  playerRight = new Player(plan, w - playerDistance, h / 2, false);
}


function draw() {
  background(0, 0, 0);

  plan.show();
  playerLeft.show();
  playerRight.show();
  playerLeft.move();
  playerRight.move();
}

function keyPressed() {
  if (key === "w") {
    playerLeft.goUp();
  }
  if (key === "s") {
    playerLeft.goDown();
  }

  if (key === "o") {
    playerRight.goUp();
  }
  if (key === "l") {
    playerRight.goDown();
  }

}


function keyReleased() {
  if (key === "w" || key === "s") {
    playerLeft.stay();
  }
  if (key === "o" || key === "l") {
    playerRight.stay();
  }

}

