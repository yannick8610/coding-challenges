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
    this.velocity = -0.5;



    this.draw = function () {
        fill('green');
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        this.x = this.x + this.velocity
    }
}
