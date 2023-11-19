const w = 600;
const h = 400;
const d = 20;
const playerDistance = w / 2 / 6;

let playerLeft;
let playerRight;
let plan;
let ball;

function setup() {
  createCanvas(w, h);

  plan = new GamePlan(d, d, w - 2 * d, h - 2 * d);
  playerLeft = new Player(plan, playerDistance, h / 2, true);
  playerRight = new Player(plan, w - playerDistance, h / 2, false);
  ball = new Ball(plan, w / 2, h / 2, 8)
  if (random() > 0.5) { // left
    playerLeft.nextBall = true
    playerRight.nextBall = false
  } else { // right
    playerLeft.nextBall = false
    playerRight.nextBall = true
  }
}

let r = 0.0;
function draw() {
  background(0, 0, 0);

  plan.show();
  playerLeft.show();
  playerRight.show();
  ball.show();

  if (playerLeft.nextBall) {
    playerLeft.nextBall = false;
    ball.reset()
    ball.go(-1, random(PI / 4, 3 * PI / 4))
  }
  if (playerRight.nextBall) {
    playerRight.nextBall = false;
    ball.reset()
    ball.go(1, random(PI / 4, 3 * PI / 4))    
  }

  if (playerLeft.touched(ball)) {
    console.log("playerLeft touched");
  } else if (playerRight.touched(ball)) {
    console.log("playerRight touched");
  } else if (plan.touched(ball, playerLeft, playerRight)) {
    console.log("plan touched");
  }

  playerLeft.move();
  playerRight.move();
  ball.move();
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

