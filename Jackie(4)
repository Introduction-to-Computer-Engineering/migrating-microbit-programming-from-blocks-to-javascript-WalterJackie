input.onButtonPressed(Button.A, function () {
    player1 += 1
    if (player1 == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
// win, loss, tie conditions
input.onButtonPressed(Button.AB, function () {
    if (player1 == 0) {
        if (player2 == 0) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (player2 == 1) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # . # . #
                . # . # .
                `)
        }
    } else if (player1 == 1) {
        if (player2 == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (player2 == 3) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # . # . #
                . # . # .
                `)
        }
    } else {
        if (player2 == 3) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (player2 == 2) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # . # . #
                . # . # .
                `)
        }
    }
})
// randomly select B
input.onButtonPressed(Button.B, function () {
    player2 = Math.randomRange(0, 2)
})
// show value of B
input.onGesture(Gesture.Shake, function () {
    if (player2 == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (player2 == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let player2 = 0
let player1 = 0
player1 = 0
basic.forever(function () {
    if (player1 > 2) {
        player1 = 0
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
