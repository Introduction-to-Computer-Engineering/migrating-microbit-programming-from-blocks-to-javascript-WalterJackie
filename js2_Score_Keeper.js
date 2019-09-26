// set var
let PAL1 = 0
let PAL2 = 0
let PALNULL = 0
// set score
input.onButtonPressed(Button.A, function () {
    PAL1 += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    PAL2 += 1
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    PALNULL += 1
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
// show score
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
    basic.showNumber(PAL1)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    basic.pause(100)
    basic.showNumber(PAL2)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showNumber(PALNULL)
    basic.pause(1000)
    control.reset()
})
