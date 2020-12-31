input.onButtonPressed(Button.A, function () {
    SetOutgoingMessage("" + Outgoing_Message + ".")
})
function SetOutgoingMessage (Message: string) {
    Outgoing_Message = Message
    TranslateMorseToLetter(Outgoing_Message)
}
input.onButtonPressed(Button.AB, function () {
    playMorse(Outgoing_Message)
    radio.sendString(Outgoing_Message)
    Outgoing_Message = ""
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . # . #
        . # # # .
        # # # # #
        . # . # .
        . # . # .
        `)
    message = receivedString
    basic.showString(receivedString)
    TranslateMorseToLetter(message)
})
input.onButtonPressed(Button.B, function () {
    SetOutgoingMessage("" + Outgoing_Message + "-")
})
function TranslateMorseToLetter (MorseMessage: string) {
    if (Morse.indexOf(Outgoing_Message) != -1) {
        basic.showString("" + (Alphabet[Morse.indexOf(Outgoing_Message)]))
    } else {
        basic.showString(Outgoing_Message)
    }
}
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . # .
            `)
        Outgoing_Message = ""
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function playMorse (MorseCode: string) {
    for (let value of MorseCode) {
        if (value == "-") {
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            music.playTone(262, music.beat(BeatFraction.Quarter))
        }
        music.rest(music.beat(BeatFraction.Quarter))
    }
}
let message = ""
let Outgoing_Message = ""
let Morse: string[] = []
let Alphabet: string[] = []
Alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "!", ",", "."]
Morse = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/", "-·-·--", "·-·-·-", "--··--"]
basic.forever(function () {

})
