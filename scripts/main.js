const SCREEN = document.querySelector("#screen");
const CTX = SCREEN.getContext("2d");
const BOX = 32;

let snake = [];
snake[0] = {
    x: 8 * BOX,
    y: 8 * BOX
}

let direction = "right";

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

function play() {
    drawScreen();
    renderSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") {
        snakeX += BOX;
    }
    if(direction == "left") {
        snakeX -= BOX;
    }
    if(direction == "up") {
        snakeY += BOX;
    }
    if(direction == "down") {
        snakeY -= BOX;
    }
 
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let game = setInterval(play, 100); // renderiza o jogo a cada 100ms