let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box, 
    y: 8 * box,
}
let snakeDirection = 'right';

const createBG = () => {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

const createSnake = () => {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

const update = (event) => {

    if (event.keyCode == 37 && snakeDirection != 'right') {snakeDirection = 'left'};
    if (event.keyCode == 38 && snakeDirection != 'down') {snakeDirection = 'up'};
    if (event.keyCode == 39 && snakeDirection != 'left') {snakeDirection = 'right'};
    if (event.keyCode == 40 && snakeDirection != 'up') {snakeDirection = 'down'};

}

document.addEventListener('keydown', update);

const initGame = () => {

    if (snake[0].x > 15 * box && snakeDirection == 'right') {snake[0].x = 0};
    if (snake[0].x < 0 && snakeDirection == 'left') {snake[0].x = 15 * box};
    if (snake[0].y > 15 * box && snakeDirection == 'down') {snake[0].y = 0};
    if (snake[0].y < 0 && snakeDirection == 'up') {snake[0].y = 15 * box};

    createBG(); 
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeDirection == 'right') {snakeX += box};
    if (snakeDirection == 'left') {snakeX -= box};
    if (snakeDirection == 'up') {snakeY -= box};
    if (snakeDirection == 'down') {snakeY += box};

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(initGame, 100);
