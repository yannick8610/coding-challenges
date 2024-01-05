function Voegeli() {


    this.x = W * 0.15;
    this.y = H / 5;
    this.h = BIRD_HEIGHT * 3 / 4;
    this.w = BIRD_WIDTH * 3 / 4;
    this.velocity = 0.3;



    this.draw = function () {
        this.x = this.x + this.velocity;
        if (random() < 0.5) {
            this.y = this.y - 1
        } else {
            this.y = this.y + 1
        }


        //bounding box debugging
        fill('red');
        //rect(this.x, this.y, this.w, this.h);
        image(imgVoegeli, this.x, this.y, this.w, this.h);
    }


}
