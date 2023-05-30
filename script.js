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
    let eyesPosition = setInterval(() => {
        if(leftEyePaddingTop === 10){
            clearInterval(eyesPosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop
        leftEye.style.left = leftEyeLeft
        rightEye.style.paddingTop = rightEyePaddingTop
        rightEye.style.left = rightEyeLeft

        leftEyePaddingTop++
        leftEyeLeft--
        rightEyePaddingTop++
        rightEyeLeft--

    } ,10)
}

const userInputBlur = ()=>{
    let eyesPosition = setInterval(() => {
        if(leftEyePaddingTop === 0){
            clearInterval(eyesPosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop
        leftEye.style.left = leftEyeLeft
        rightEye.style.paddingTop = rightEyePaddingTop
        rightEye.style.left = rightEyeLeft

        leftEyePaddingTop--
        leftEyeLeft++
        rightEyePaddingTop--
        rightEyeLeft++

    } ,10)
}

const userInputKeypress = ()=>{
    console.log("userInputKeypress")
}

const passInputFocus = ()=>{
    console.log("passInputFocus")
    let eyesPosition = setInterval(() => {
        if(leftEyeTop === 63){
            clearInterval(eyesPosition)
        }

        leftEye.style.top = leftEyeTop
        leftEye.style.left = leftEyeLeft
        rightEye.style.top = rightEyeTop
        rightEye.style.left = rightEyeLeft

        leftEyeTop--
        leftEyeLeft++
        rightEyeTop--
        rightEyeLeft--

    } , 10)
}

const passInputBlur = ()=>{
    let eyesPosition = setInterval(() => {
        if(leftEyeTop === 75){
            clearInterval(eyesPosition)
        }

        leftEye.style.top = leftEyeTop
        leftEye.style.left = leftEyeLeft
        rightEye.style.top = rightEyeTop
        rightEye.style.left = rightEyeLeft

        leftEyeTop++
        leftEyeLeft--
        rightEyeTop++
        rightEyeLeft++

    } , 20)
}


userInput.addEventListener('focus' , userInputFocus)
userInput.addEventListener('blur' , userInputBlur)
userInput.addEventListener('keypress' , userInputKeypress)

passInput.addEventListener('focus' , passInputFocus)
passInput.addEventListener('blur' , passInputBlur)