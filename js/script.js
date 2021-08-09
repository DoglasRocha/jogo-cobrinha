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

const initGame = () => {
    createBG(); 
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeDirection == 'right') snakeX += box;
    if (snakeDirection == 'left') snakeX -= box;
    if (snakeDirection == 'up') snakeY -= box;
    if (snakeDirection == 'down') snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(initGame, 100);
