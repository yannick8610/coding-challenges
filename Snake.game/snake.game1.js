let W = 300;
let H = 500;
const PADDING = 5;
const PADDING_BOTTOM = 28 * PADDING;
let CELL_SIZE = 20; //px
const COL_CELLS = 10; // count
const ROW_CELLS = 20; // count
const COL_CELLS_AND_BOUNDARY = COL_CELLS + 2;
const ROW_CELLS_AND_BOUNDARY = ROW_CELLS + 2;

let cnv;
let startScreen;
let game;

function setup() {
    frameRate(500);
    resizeIfNeeded();
    cnv = createCanvas(W, H);

    resizeFinalize();
}

function draw() {
    background("black");
    startScreen.draw();
    game.draw();
}