input.onButtonPressed(Button.A, function () {
    basic.showNumber(groups.removeAt(randint(0, groups.length - 1)))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 5))
})
let groups: number[] = []
groups = [1, 2, 3, 4, 5]
