// anything outside a function or class runs on startup


serial.redirectToUSB()

let maincounter: number = 0
basic.forever(function () {
    maincounter += 1
    serial.writeLine(`Loop number: ${maincounter} `)
    basic.pause(1000)
})
