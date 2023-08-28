import { update as updateSnake,draw as drawSnak } from "./snake.js"
import {update as updateFood,draw as drawFood } from "./food.js"
import { getDirection } from "./input.js"
let gameboard = document.getElementById("game-board")
let lastRender = 0
let speed = 4
function main(currentTime) {
    requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRender)/1000
    if(secondsSinceLastRender < 1/speed)return
    lastRender = currentTime
    update()
    draw(gameboard)
}
window.requestAnimationFrame(main)



function draw(gameboard){
    gameboard.innerHTML = ""
    drawSnak(gameboard)
    drawFood(gameboard)
}
function update(){
    updateSnake()
    updateFood()
    getDirection()
}

