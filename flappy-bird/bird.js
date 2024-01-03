function Bird() {
    const FLY = 5;

    this.x = w * 0.4;
    this.y = h / 2;
    this.r = 10;

    this.draw = function () {
        fill(255, 0, 0);
        ellipseMode(CENTER);
        strokeWeight(0)
        circle(this.x, this.y, this.r, 255, 0, 0)
        ellipseMode(CORNER)
    }

    this.fly = function () {
        this.y = this.y - FLY;
    }

}