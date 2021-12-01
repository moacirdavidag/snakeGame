const SCREEN = document.querySelector("#screen");
const CTX = SCREEN.getContext("2d");
const BOX = 32;

function drawScreen() {
    CTX.fillStyle = "whitesmoke";
    CTX.fillRect(0, 0, 16 * BOX, 16 * BOX);
}

drawScreen();