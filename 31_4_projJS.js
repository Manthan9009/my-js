let randomNumber = parseInt(Math.random()*10+1)

const submit = document.querySelector('#subt')
const userIP = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userIP.value)
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Plesae enter a valid number")
    }
    else if(guess<1 || guess>100){
        alert("Please enter a number between 1 and 100")
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number Was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it Right`);
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too Low`);
    }
    else{
        displayMessage(`Number is too Hight`);
    }
}

function displayGuess(guess){
    userIP.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaning.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userIP.value = ''
    userIP.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`

    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*10+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaning.innerHTML = `${11-numGuess}`
        userIP.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        
        playGame = true
    })
}