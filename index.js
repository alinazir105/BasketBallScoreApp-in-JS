let homeScore = 0
let guestScore = 0
const homeScoreText = document.getElementById("home-score-text")
const guestScoreText = document.getElementById("guest-score-text")

const homeBtn1 = document.getElementById("home-score-btn1")
const homeBtn2 = document.getElementById("home-score-btn2")
const homeBtn3 = document.getElementById("home-score-btn3")

const guestBtn1 = document.getElementById("guest-score-btn1")
const guestBtn2 = document.getElementById("guest-score-btn2")
const guestBtn3 = document.getElementById("guest-score-btn3")

const newGameBtn = document.getElementById("newGame-btn")

homeBtn1.addEventListener("click", function(){
    homeScore += 1
    homeScoreText.innerText = homeScore
})

homeBtn2.addEventListener("click", function(){
    homeScore += 2
    homeScoreText.innerText = homeScore
})

homeBtn3.addEventListener("click", function(){
    homeScore += 3
    homeScoreText.innerText = homeScore
})

guestBtn1.addEventListener("click", function(){
    guestScore += 1
    guestScoreText.innerText = guestScore
})

guestBtn2.addEventListener("click", function(){
    guestScore += 2
    guestScoreText.innerText = guestScore
})

guestBtn3.addEventListener("click", function(){
    guestScore += 3
    guestScoreText.innerText = guestScore
})

newGameBtn.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0

    homeScoreText.innerText = homeScore
    guestScoreText.innerText = guestScore
})