// anything outside a function or class runs on startup
let maincounter: number = 0

basic.forever(function () {
    maincounter++;
    serial.writeLine(`Loop number: ${maincounter} `);
    basic.pause(1000);
})
