function Ball(plan, x, y, r) {

    const speedRadius = 5;

    this.plan = plan;
    this.x = x;
    this.y = y;
    this.r = r;
    this.velocityX = 0.0;
    this.velocityY = 0.0;
    this.nextBall = false;

    this.show = function() {
        fill(255,0,0);
        ellipseMode(CENTER);
        strokeWeight(0)
        circle(this.x, this.y, this.r, 255, 0, 0)
        ellipseMode(CORNER)
    }

    this.move = function() {
        this.x = this.x + this.velocityX;
        this.y = this.y + this.velocityY;
    }

    this.go = function(direction, alpha) { // PI / 4 - PI * 3 /4
        alpha = alpha - PI / 2
        this.velocityX = direction * speedRadius * cos(alpha)
        this.velocityY = direction * speedRadius * sin(alpha)
    }

    this.reset = function() {
        this.x = this.plan.w / 2;
        this.y = random(0, this.plan.h * 2 / 3) + this.plan.h / 6 + this.plan.y;
    }


}