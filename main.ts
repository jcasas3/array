input.onPinPressed(TouchPin.P0, function () {
    temperature = input.temperature()
    if (temperature <= 25) {
        level = 1
    } else if (temperature > 25) {
        level = 2
    }
    if (level == 1) {
        while (index_question <= 4) {
            basic.showString("Level 1")
            current_question = questionList_1[index_question]
            basic.showString("" + (current_question))
            basic.showString("A")
            basic.showString("=")
            basic.showString("True")
            basic.showString("B")
            basic.showString("=")
            basic.showString("False")
            index_question += 1
        }
        basic.showString("Level 1 finished")
        basic.showString("Adjust temperature >25 for level 2")
    }
    if (level == 2) {
        basic.showString("Level 2")
        for (let value of ["6", "7", "8", "9", "10"]) {
            basic.showString("" + (value))
        }
    }
})
input.onButtonPressed(Button.A, function () {
    pressedA = 1
})
input.onButtonPressed(Button.B, function () {
    pressedB = 1
})
input.onPinPressed(TouchPin.P1, function () {
    let value = ""
    if (level == 1) {
        if ((false || false) && (pressedA == 1 && pressedB == 0)) {
            basic.showString(value)
            basic.clearScreen()
            basic.showString("Correct!")
            correctAnswers += 1
            music.playMelody("C5 B A G F E D C ", 120)
            CorrectAnswerSum += CorrectAnswerSum + 10
            timer = randint(15, 25)
        } else if ((value == "3" || (value == "4" || value == "5")) && input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            basic.showString("Incorrect!")
            incorrectAnswers += 1
            music.playTone(392, music.beat(BeatFraction.Whole))
            timer = randint(15, 25)
        } else if ((value == "1" || value == "2") && input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            basic.showString("Incorrect!")
            incorrectAnswers += 1
            music.playTone(392, music.beat(BeatFraction.Whole))
            timer = randint(15, 25)
        } else if ((value == "3" || (value == "4" || value == "5")) && input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            basic.showString("Correct!")
            correctAnswers += 1
            music.playMelody("C5 B A G F E D C ", 120)
            CorrectAnswerSum += CorrectAnswerSum + 10
            timer = randint(15, 25)
        }
    } else {
        if ((value == "6" || (value == "7" || (value == "8" || value == "9"))) && input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            basic.showString("Correct!")
            correctAnswers += 1
            music.playMelody("C5 B A G F E D C ", 120)
            CorrectAnswerSum += CorrectAnswerSum + 10
        } else if ((value == "6" || (value == "7" || (value == "8" || value == "9"))) && input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            basic.showString("Incorrect!")
            incorrectAnswers += 1
            music.playTone(392, music.beat(BeatFraction.Whole))
        } else if (value == "10" && input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            basic.showString("Incorrect!")
            incorrectAnswers += 1
            music.playTone(392, music.beat(BeatFraction.Whole))
        } else if (value == "10" && input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            basic.showString("Correct!")
            correctAnswers += 1
            music.playMelody("C5 B A G F E D C ", 120)
            CorrectAnswerSum += CorrectAnswerSum + 10
        }
    }
})
let incorrectAnswers = 0
let timer = 0
let CorrectAnswerSum = 0
let correctAnswers = 0
let current_question = ""
let level = 0
let pressedB = 0
let pressedA = 0
let index_question = 0
let questionList_1: string[] = []
let temperature = 0
temperature = input.temperature()
questionList_1 = ["1", "2", "3", "4", "5"]
let questionList_2 = ["6", "7", "8", "9", "10"]
index_question = 0
pressedA = 0
pressedB = 0
basic.forever(function () {
	
})
