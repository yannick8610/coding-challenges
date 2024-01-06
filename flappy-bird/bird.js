function Bird() {
    const FLY = 20;

    this.x = W * 0.15;
    this.y = H / 2;
    this.h = BIRD_HEIGHT;
    this.w = BIRD_WIDTH;
    this.velocity = 0.2;
    this.isGameOver = false;
    this.imageCounter = 0;

    this.gameOver = function () {
        textAlign(CENTER);
        fill(0)
        textSize(20);
        textStyle(BOLD);
        text("GAME OVER !!!", W / 2, H / 2);
        this.isGameOver = true;
        noLoop()
    }

    this.boundingBox = function () {
        const gap = 2;
        return {
            x: this.x - gap,
            y: this.y - gap - 1,
            w: this.w - 2 * gap,
            h: this.h - 2 * gap - 1
        }
    }

    this.draw = function () {
        if (this.isGameOver) {
            return;
        }
        this.y = this.y + this.velocity;
        if (this.y >= H - this.h) {
            this.y = H - this.h;
            this.gameOver();
        } else {
            this.velocity = this.velocity + 0.175;
        }

        //bounding box debugging
        // rect(this.x, this.y, this.w, this.h);
        if (this.imageCounter < 3) {
            image(imgBird_0, this.x, this.y, this.w, this.h);
        } else if (this.imageCounter < 6) {
            image(imgBird_1, this.x, this.y, this.w, this.h);
        } else {
            image(imgBird_2, this.x, this.y, this.w, this.h);
        }
        this.imageCounter = (this.imageCounter + 1) % 9;
    }

    this.fly = function () {
        this.y = this.y - FLY;
        if (this.y < this.h) {
            this.gameOver();
        }
        this.velocity = -2;
    }



}

function Scoreboard() {
    this.score = 0;
    this.x = W / 2;
    this.y = 50;


    this.plus1 = function () {
        this.score = this.score + 1;
    }

    this.draw = function () {
        fill('black');
        textSize(50);
        textAlign(CENTER)
        text(this.score, this.x, this.y);

    }
}