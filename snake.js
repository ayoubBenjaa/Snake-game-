import { getDirection } from "./input.js"
import { gridPosition } from "./grid.js"
let snakeBody = [
    { x: 11, y: 11 },
]

export function draw(gameBoard) {
    snakeBody.forEach((e) => {
        const snake = document.createElement("div")
        snake.classList.add("snake")
        snake.style.gridColumnStart = e.x
        snake.style.gridRowStart = e.y
        gameBoard.appendChild(snake)
    })
}

export function update() {
    gameOver()
    let direction = getDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += direction.x
    snakeBody[0].y += direction.y
}

export function onSnake(foodPosition) {
    return snakeBody.some((snakePosition) => {
        return equalPositions(snakePosition, foodPosition)
    })
}

function equalPositions(pos1, pos2) {
    return (pos1.x === pos2.x && pos1.y === pos2.y)
}

export function expandSnake(expand) {
    for (let i = 0; i < expand; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
}



function gameOver() {
    let position =  gridPosition(snakeBody[0])
   if(position){
    window.alert("bro you lose")
    snakeBody = [{ x:11, y:11}]
    position = false
   }
}
