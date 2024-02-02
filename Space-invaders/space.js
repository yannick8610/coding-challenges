const w = 600;
const h = 400;
const d = 20;
const playerDistance = w / 2 / 6;

let rocket;
let gameOver = false;

function setup() {
    createCanvas(w, h);


}

let r = 0.0;
function draw() {
    background(0, 0, 0);

    space.show();
    bullets.show();
    rocket.show();
    ufo.show();







    function keyPressed() {
        if (key === " " && gameOver) {
            setup();
            loop();
        }
        if (key === "a") {
            rocket.goRight();
        }
        if (key === "d") {
            rocket.goLeft();
        }




        function keyReleased() {
            if (key === "a") {
                rocket.stay();
            }
            if (key === "d") {
                rocket.stay();
            }

        }

    }
}
