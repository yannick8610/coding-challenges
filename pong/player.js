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
        line(this.x + this.w / 2, this.y, this.x + this.w / 2, this.h + this.y);      
    }


    this.touched = function(ball, playerLeft, playerRight) {
        if (playerLeft.nextBall || playerRight.nextBall) {
            return false;
        }
        if (ball.x - this.x < ball.r) {
            ball.velocityX = ball.velocityY = 0;
            playerRight.goal();
            playerLeft.nextBall = true;
            playerRight.nextBall = false;           
            return true;
        }
        if (this.x + this.w - ball.x < ball.r) {
            ball.velocityX = ball.velocityY = 0;
            playerLeft.goal();
            playerRight.nextBall = false;
            playerLeft.nextBall = true;           
            return true;
        }
        if (ball.y - this.y < ball.r) {
            ball.velocityY *= -1;
        }
        if (this.y + this.h - ball.y < ball.r) {
            ball.velocityY *= -1;
        }
        return false;
    }
}


function Player(plan, x, y, isLeft) {
    const speed = 8;

    this.plan = plan;
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 60;
    this.isLeft = isLeft;
    this.velocity = 0;
    this.score = 0;
    this.nextBall = false;


    this.show = function() {
        fill(92);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h)
        rectMode(CORNER)
        textSize(50);
        if (this.isLeft) {
            textAlign(CENTER)
            text(this.score, this.x + 40, 80);
        } else {
            textAlign(CENTER)
            text(this.score, this.x - 40, 80);
        }
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

    this.goal = function() {
        this.score++;
    }

    this.missedBall = function(ball) {
        return false;
    }

    this.touched = function(ball) {
        if (ball.y + ball.r >= this.y - this.h / 2 && ball.y - ball.r <= this.y + this.h / 2) {
            if (this.isLeft) {
                if (ball.x - ball.r < this.x + this.w / 2) {
                    ball.velocityX *= -1;
                    return true
                }
            } else {
                if (ball.x + ball.r >= this.x - this.w / 2) {
                    ball.velocityX *= -1;
                    return true
                }
            }
        }
        return false;
    }

}