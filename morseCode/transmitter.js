input.onButtonPressed(Button.A, function () {
    SetOutgoingMessage("" + Outgoing_Message + ".")
})
function SetOutgoingMessage (Message: string) {
    Outgoing_Message = Message
    if (Morse.indexOf(Outgoing_Message) != 0) {
        basic.showString("" + (Alphabet[Morse.indexOf(Outgoing_Message)]))
    } else {
        basic.showString(Outgoing_Message)
    }
}
radio.onReceivedString(function (receivedString) {
    message = receivedString
    basic.showString("" + (Alphabet[Morse.indexOf(message)]))
})
input.onButtonPressed(Button.B, function () {
    SetOutgoingMessage("" + Outgoing_Message + "-")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
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
            # . . . .
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
let message = ""
let Outgoing_Message = ""
let Morse: string[] = []
let Alphabet: string[] = []
Alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "!", ",", "."]
Morse = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/", "-·-·--", "·-·-·-", "--··--"]
basic.forever(function () {

})
