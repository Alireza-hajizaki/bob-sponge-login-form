let rightEye = document.querySelector(".righteye")
let leftEye = document.querySelector(".lefteye")
let userInput = document.querySelector("#userInput")
let passInput = document.querySelector("#passInput")

let leftEyeTop = 75
let leftEyeLeft = 110
let leftEyePaddingTop = 0
let leftEyePaddingLeft = 0

let rightEyeTop = 75
let rightEyeLeft = 175
let rightEyePaddingTop = 0
let rightEyePaddingLeft = 0

const userInputFocus = ()=>{
    console.log("userInputFocus")
}

const userInputBlur = ()=>{
    console.log("userInputBlur")
}

const userInputKeypress = ()=>{
    console.log("userInputKeypress")
}

const passInputFocus = ()=>{
    console.log("passInputFocus")
}

const passInputBlur = ()=>{
    console.log("passInputBlur")
}


userInput.addEventListener('focus' , userInputFocus)
userInput.addEventListener('blur' , userInputBlur)
userInput.addEventListener('keypress' , userInputKeypress)

passInput.addEventListener('focus' , passInputFocus)
passInput.addEventListener('blur' , passInputBlur)