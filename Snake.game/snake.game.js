let canvas;
let context;
let snake;
let direction;

const cellSize = 20; // Size of each cell in the grid
const numRows = 20; // Number of rows in the grid
const numCols = 20; // Number of columns in the grid

function init() {
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");
    canvas.width = cellSize * numCols;
    canvas.height = cellSize * numRows;

    snake = [{ x: 10, y: 10 }]; // Initial position of the snake
    direction = "right"; // Initial direction of the snake

    document.addEventListener("keydown", changeDirection);

    setInterval(gameLoop, 100); // Run the game loop every 100 milliseconds
}

function changeDirection(event) {
    const key = event.key;
    if (key === "ArrowUp" && direction !== "down") {
        direction = "up";
    } else if (key === "ArrowDown" && direction !== "up") {
        direction = "down";
    } else if (key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }
}

function gameLoop() {
    moveSnake();
    draw();
}

function moveSnake() {
    let newX = snake[0].x;
    let newY = snake[0].y;

    // Move the head of the snake based on the current direction
    if (direction === "up") {
        newY--;
    } else if (direction === "down") {
        newY++;
    } else if (direction === "left") {
        newX--;
    } else if (direction === "right") {
        newX++;
    }

    // Add the new head to the beginning of the snake array
    snake.unshift({ x: newX, y: newY });

    // Remove the tail of the snake to keep its length constant
    snake.pop();
}

function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    context.fillStyle = "green";
    snake.forEach(segment => {
        context.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    });
}

// Initialize the game
init();