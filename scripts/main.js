const SCREEN = document.querySelector("#screen");
const CTX = SCREEN.getContext("2d");
const BOX = 32;

let snake = [];
snake[0] = {
    x: 8 * BOX,
    y: 8 * BOX
}

function drawScreen() {
    CTX.fillStyle = "whitesmoke";
    CTX.fillRect(0, 0, 16 * BOX, 16 * BOX);
}

function renderSnake() {
    for(let i = 0; i < snake.length; i++) {
        CTX.fillStyle = "green";
        CTX.fillRect(snake[i].x, snake[i].y, BOX, BOX);
    }
}

drawScreen();
renderSnake();