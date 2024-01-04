function Bird() {
    const FLY = 20;

    this.x = W * 0.15;
    this.y = H / 2;
    this.h = BIRD_HEIGHT;
    this.w = BIRD_WIDTH;
    this.velocity = 0.1;
    this.isGameOver = false;

    this.gameOver = function () {
        textAlign(CENTER);
        fill(0)
        textSize(20);
        textStyle(BOLD);
        text("GAME OVER !!!", W / 2, H / 2);
        this.isGameOver = true;
        noLoop()
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
            this.velocity = this.velocity + 0.1;
        }

        //bounding box debugging
        // rect(this.x, this.y, this.w, this.h);
        image(imgBird, this.x, this.y, this.w, this.h);
    }

    this.fly = function () {
        this.y = this.y - FLY;
        if (this.y < this.h) {
            this.gameOver();
        }
        this.velocity = -1;
    }



}
