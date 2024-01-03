function Bird() {
    const FLY = 20;

    this.x = w * 0.4;
    this.y = h / 2;
    this.r = 10;
    this.velocity = 0.1;
    this.gravity = true;
    this.isGameOver = false;

    this.gameOver = function () {
        textAlign(CENTER);
        fill(200)
        text("GAME OVER !!!", w / 2, h / 2);
        this.isGameOver = true;
        noLoop()
    }

    this.draw = function () {
        if (this.isGameOver) {
            return;
        }

        this.y = this.y + this.velocity;
        if (this.gravity) {
            if (this.y >= h - this.r) {
                this.y = h - this.r;
                this.gameOver();
            } else {
                this.velocity = this.velocity + 0.1;
            }
        } else {
            this.velocity = this.velocity - 0.1;
            if (this.y < this.r) {
                this.gameOver();
            }
        }

        fill(255, 0, 0);
        ellipseMode(CENTER);
        strokeWeight(0)
        circle(this.x, this.y, this.r, 255, 0, 0)
        ellipseMode(CORNER)
    }

    this.fly = function () {
        this.y = this.y - FLY;
        if (this.y < this.r) {
            this.gameOver();
        }
        this.velocity = -1;
        this.gravity = false;
    }
    this.gravityOn = function () {
        this.velocity = 0;
        this.gravity = true;
    }


}