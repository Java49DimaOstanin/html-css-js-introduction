const word = "table";
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")
var trials = 2;
const cong = document.querySelector(".message-congs")
const HIDDEN = "hidden";
const fail = document.querySelector(".message-fail")
const HIDDEN2 = "hidden2";
let counter = document.querySelector('.counter-display');

function onChange(event) {
     counter.innerHTML = trials;
    const wordGuess = event.target.value;
    event.target.value = '';
    if(wordGuess.length != N_LETTERS ) {
       alert(`A word should contain ${N_LETTERS} letters`)
       trials--;
       if(trials == -1){
        fail.classList.remove(HIDDEN2);
    }
    }  else  {
       const wordAr = Array.from(wordGuess);
       wordAr.forEach((l,i) => letterElements[i].innerHTML = l)
       const colors = wordAr.map((l, i ) => {
        let index = word.indexOf(l);
        let res = 'red';
        if (index > - 1) {
            res = index == i ? 'green' : 'yellow';
        }
            return res;
       })
       colors.forEach((c,i) => letterElements[i].style.color=c)
       if (wordGuess == word) {
        cong.classList.remove(HIDDEN)
      } else  {
        trials--;
        
        if( trials == -1){
            fail.classList.remove(HIDDEN2);
        }
    }
}
    }
    
