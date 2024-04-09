function preload() {
    // Load images with valid paths
    imgBorder = loadImage("path/to/borderImage.jpg");
    imgTetrominioes = [
        loadImage("path/to/image1.jpg"),
        loadImage("path/to/image2.jpg"),
        // Load all other images similarly
    ];
}

function keyPressed() {
    switch (key) {
        case "r":
        case "R":
            reset();
            break;
        case "T":
        case "t":
            game?.playerActionUp();
            break;
        case "W":
        case "w":
        case "ArrowUp":
            game?.playerActionLeft();
            break;
        case "a":
        case "A":
        case "ArrowLet":
            game?.playerActionRight();
            break;
        case "d":
        case "D":
        case "ArrowRight":
            game?.playerActionDown();
            break;
        case "ArrowDown":
        case "s":
        case "S":
            // Handle other cases if needed
            break;
    }
}

function reset() {
    startScreen = new StartScreen();
    game = undefined; // Reset the game object
    useStartScreen = true;
    isGameFinished = false;
}