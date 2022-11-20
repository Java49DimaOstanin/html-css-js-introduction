
const words = [
    ['Portugal', 'ronaldo','src/img/ronaldo.webp'],
    ['Argentina', 'messi','src/img/messi.jpg'],
    ['Brazil','neymar','src/img/neymar.jpg'],
    ['England', 'rashford','src/img/reshford.webp'],
    ['Norway', 'haaland','src/img/haaland.jpg'],
    ['France', 'mbappe','src/img/mbappe.jpg'],
    ['Egypt', 'sallah','src/img/Mohamed-Salah-Liverpool.webp'],
    ['Sinegal', 'mane','src/img/mane.webp']];

   
let word;
let index = 0;
let prevInd = -1;
let searchWordArr = [];
const sectionElement = document.querySelector(".word-guess");
let searchWordArrLen=0;
//sectionElement.innerHTML = getDivsElements();
let letterElements = document.querySelectorAll(".letter-guess");
const trialNumberElement = document.querySelector(".trial-number");
const wordTrialsElement = document.querySelector(".word-trial");
const gameOverElement = document.querySelector(".game-over-message");
const invitationElement = document.querySelector(".guess-invitation");
const selectImage = document.querySelectorAll(".image");
//const playAgainElement = document.getElementById("play-again");
const helpInnerImage = document.querySelector(".contents");

let flGameOver = false;
let trials = 0;

function getDivsElements() {
    
    index = getIndex();
    console.log('word=', words[index][1]);
    word = words[index][1];
    searchWordArr = Array.from(word);
    let res = searchWordArr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}

function getIndex() {
    index = Math.floor(Math.random() * words.length); 
    while(index == prevInd) {
        index = Math.floor(Math.random() * words.length);  
    }
    prevInd = index;
    return index;
}

function showTrialMessage(trials, word) {    
    trialNumberElement.innerHTML = `You have done ${trials} guess trials`;  
    wordTrialsElement.innerHTML = `Your word is ${word}`;
}
function helpText() {
    invitationElement.innerHTML = `Great football players from"${words[index][0]}" (still playing)`;
}

function makeImage() {
    var img = document.createElement('img')
    img.src = words[index][2];
    document.getElementById('content').appendChild(img);
 }
function startGame() {
    sectionElement.innerHTML = getDivsElements();
    letterElements = document.querySelectorAll(".letter-guess");
    trials = 0;
    searchWordArrLen = 0;
    flGameOver = false;
    gameOverElement.innerHTML =  "";
    helpInnerImage.innerHTML = "";
    invitationElement.innerHTML = "";
    
}
function onChange(event) {
    let wordGuess = event.target.value.toLowerCase();
    event.target.value = '';
    if (flGameOver) {
        alert("game is over");
        return;
    }
    trials++;
    showTrialMessage(trials, wordGuess);
    const wordAr = Array.from(wordGuess);
    let colors = searchWordArr.map((l) => {
        return wordAr.includes(l) ? 'white' : 'black';
    })
    colors.forEach((color, index) => {
        if(color === 'white') {
            searchWordArrLen++;
            letterElements[index].style.background=color;
        }
    });
    if(searchWordArrLen === searchWordArr.length) {
        endGame(true);
    }
}
function endGame(isSuccess) {
    if (isSuccess) {
  gameOverElement.innerHTML = ` <div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="300" 
  src="https://giphy.com/embed/BnDIcyVmgoHIz7NtFm/video" width="480"></iframe></div>`
        invitationElement.innerHTML = '';
        
        
    }
   
    trialNumberElement.innerHTML = '';
    wordTrialsElement.innerHTML = '';
    flGameOver = true;
}
startGame();
