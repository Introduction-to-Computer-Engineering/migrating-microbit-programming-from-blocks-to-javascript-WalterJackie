let go = false
let Sprite = game.createSprite(0, 0)

input.onButtonPressed(Button.B, function () {
    go = false
})
input.onButtonPressed(Button.A, function () {
    go = true
})

basic.forever(function () {
    while (go == true) {
        Sprite.move(1)
        basic.pause(500)
        if (Sprite.isTouchingEdge()) {
            Sprite.turn(Direction.Right, 90)
        }
    }
})
