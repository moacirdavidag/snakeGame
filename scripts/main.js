const SCREEN = document.querySelector("#screen");
const CTX = SCREEN.getContext("2d");
const BOX = 32;

let snake = [];
snake[0] = {
    x: 8 * BOX,
    y: 8 * BOX
}

let food = {
    x: Math.floor(Math.random() * 15 + 1) * BOX,
    y: Math.floor(Math.random() * 15 + 1) * BOX,
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

function drawFood() {
    CTX.fillStyle = "red";
    CTX.fillRect(food.x, food.y, BOX, BOX);
}

document.addEventListener("keydown", update);

function update(e) {
    if(e.keyCode == 37 && direction != "right") {
        direction = "left";
    }
    if(e.keyCode == 38 && direction != "down") {
        direction = "down";
    }
    if(e.keyCode == 39 && direction != "left") {
        direction = "right";
    }
    if(e.keyCode == 40 && direction != "up") {
        direction = "up";
    }
}

function play() {


    if(snake[0].x > 15 * BOX && direction == "right") {
        snake[0].x = 0;
    }
    if(snake[0].x < 0 && direction == "left") {
        snake[0].x = 16 * BOX;
    }
    if(snake[0].y > 15 * BOX && direction == "up") {
        snake[0].y = 0;
    }
    if(snake[0].y < 0 && direction == "down") {
        snake[0].y = 16 * BOX;
    }    

    for(let i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(play);
            alert("perdeu");
        }
    }

    drawScreen();
    renderSnake();
    drawFood();

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

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * BOX;
        food.y = Math.floor(Math.random() * 15 + 1) * BOX;       
    }
 

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let game = setInterval(play, 100); // renderiza o jogo a cada 100ms