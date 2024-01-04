function Bird() {
    const FLY = 20;

    this.x = W * 0.2;
    this.y = H / 2;
    this.r = BIRD_RADIUS;
    this.velocity = 0.1;
    this.isGameOver = false;

    this.gameOver = function () {
        textAlign(CENTER);
        fill(200)
        text("GAME OVER !!!", W / 2, H / 2);
        this.isGameOver = true;
        noLoop()
    }

    this.draw = function () {
        if (this.isGameOver) {
            return;
        }
        this.y = this.y + this.velocity;
        if (this.y >= H - this.r) {
            this.y = H - this.r;
            this.gameOver();
        } else {
            this.velocity = this.velocity + 0.1;
        }


        fill(255, 0, 0);
        /*
        ellipseMode(CENTER);
        strokeWeight(0)
        circle(this.x, this.y, this.r, 255, 0, 0)
        ellipseMode(CORNER)
        */
        image(imgBird, this.x, this.y, this.r * 2, this.r * 2);
    }

    this.fly = function () {
        this.y = this.y - FLY;
        if (this.y < this.r) {
            this.gameOver();
        }
        this.velocity = -1;
    }



}
