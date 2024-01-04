function Pipes() {
    this.w = W;
    this.h = H;
    this.startNo1 = W * 0.2 + 100;
    this.pipes = [];

    // versuche neue Pipes zu erzeugen, abhängig davon ob sie sichtbar sind
    // oder verschwinden
    this.spawn = function () {
        if (PIPE_SPACE <= PIPE_WIDTH) {
            throw Error("SPACE between pipes must be larger than its own width");
        }
        if (this.pipes.length == 0) {
            this.pipes.push(new Pipe(this.startNo1));
        }
        let lastPipe = this.pipes[this.pipes.length - 1];
        let newPipeX;
        newPipeX = lastPipe.x + PIPE_SPACE;
        while (newPipeX < W) {
            this.pipes.push(new Pipe(newPipeX));
            newPipeX = newPipeX + PIPE_SPACE;
            console.log("Spawn")
        }

        let firstPipe = this.pipes[0];
        if (firstPipe.x + firstPipe.w < 0) {
            this.pipes.shift();
            console.log("Removed")
        }
        // in der var pipes sind alle Pipe() drin, die sichtbar sind.
    }

    this.draw = function () {
        this.spawn();
        for (let i = 0; i < this.pipes.length; i++) {
            this.pipes[i].draw();
        }
    }
}

function Pipe(xpos) {
    this.x = xpos;
    this.y = 0;
    this.w = PIPE_WIDTH;
    this.h = H

    this.hGap = map(random(), 0.0, 1.0, 3.0, 6) * BIRD_RADIUS; // 3 * R - 5.5 * R
    this.yTopGap = map(random(), 0.0, 1.0, this.h / 10, this.h / 2);
    this.yBottomGap = this.y + this.yTopGap + this.hGap;

    this.velocity = -2.0;



    this.draw = function () {
        noStroke();

        fill('pink');
        image(imgPipeDown, this.x, this.y, this.w, this.yTopGap);
        image(imgPipeUp, this.x, this.yBottomGap, this.w, this.h - this.yBottomGap);

        this.x = this.x + this.velocity
    }
}
