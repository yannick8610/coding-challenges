function GamePlan(x, y, w, h) {
    const playerGap = 3;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.minPlayerY = this.y + playerGap;
    this.maxPlayerYH = this.y + this.h - playerGap;

    this.show = function() {
        noFill();
        stroke(255);
        strokeWeight(1)
        rect(this.x, this.y, this.w, this.h, 10);
        line(this.w / 2, this.y, this.w / 2, this.h + this.y);      
    }
}


function Player(plan, x,y,isLeft) {
    const speed = 5;

    this.plan = plan;
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 60;
    this.isLeft = isLeft;
    this.velocity = 0;

    this.show = function() {
        fill(92);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h)
        rectMode(CORNER)
    }

    this.move = function() {
        this.y = this.y + this.velocity;

        // top
        this.y = Math.max(this.y - this.h / 2, this.plan.minPlayerY) + this.h / 2;

        // down
        this.y = Math.min(this.y + this.h / 2, this.plan.maxPlayerYH) - this.h / 2;

    }

    this.goUp = function() {
        this.velocity = -speed;
    }

    this.goDown = function() {
        this.velocity = speed;
    }

    this.stay = function() {
        this.velocity = 0;
    }


}