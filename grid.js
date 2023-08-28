
export function gridPosition(snakePosition) {
    return (
        snakePosition.x < 1 || snakePosition.y < 1 ||
        snakePosition.x > 21 || snakePosition.y > 21
    )
}