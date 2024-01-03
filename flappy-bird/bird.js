function Bird() {
    const FLY = 40;

    this.x = w * 0.4;
    this.y = h / 2;
    this.r = 10;
    this.velocity = 0.1;

    this.draw = function () {
        this.y = this.y + this.velocity;
        if (this.y >= h - this.r) {
            this.y = h - this.r;
        } else {
            this.velocity = this.velocity + 0.1;
        }

        fill(255, 0, 0);
        ellipseMode(CENTER);
        strokeWeight(0)
        circle(this.x, this.y, this.r, 255, 0, 0)
        ellipseMode(CORNER)
    }

    this.fly = function () {
        this.y = this.y - FLY;
        this.velocity = -1;
    }

}