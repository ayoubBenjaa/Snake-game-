let foodBody =[{ x:Math.floor(Math.random()*21+1),  y: Math.floor(Math.random()*21+1) }]
import { onSnake, expandSnake } from "./snake.js"

let epand = 1


export function draw(gameBoard) {

        const food = document.createElement("div")
        food.classList.add("food")
        food.style.gridColumnStart = foodBody[0].x
        food.style.gridRowStart = foodBody[0].y
        gameBoard.appendChild(food)
}

export function update() {
    if(onSnake(foodBody[0])){
        expandSnake(epand)
        foodBody[0].x = Math.floor(Math.random()*21+1)
        foodBody[0].y = Math.floor(Math.random()*21+1)
    }}