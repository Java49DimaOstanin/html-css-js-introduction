const word = "apple";
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")
var trials = 2;
var trialsUsed = 0;
const cong = document.querySelector(".message-congs")
const HIDDEN = "hidden";
const fail = document.querySelector(".message-fail")
const HIDDEN2 = "hidden2";
let counter = document.querySelector('.counter-display');
const scounterUsed = document.querySelector('.counter-display-used');

function onChange(event) {
    
    counter.innerHTML = 'Left trials' + ' ' +trials;
    const wordGuess = event.target.value;
    event.target.value = '';
    if(wordGuess.length != N_LETTERS ) {
       alert(`A word should contain ${N_LETTERS} letters`)
       counterPlus()
       if(trials == -1){
        fail.classList.remove(HIDDEN2);
        restart();
        
    }
    }  else  {
       const wordAr = Array.from(wordGuess);
       wordAr.forEach((l,i) => letterElements[i].innerHTML = l)
       const colors = wordAr.map((l, i ) => {
        let index = word.indexOf(l);
        let res = 'red';
        if (index > - 1) {
            res = index == l ? 'yellow' : 'green';
        }
            return res;
       })
       colors.forEach((c,i) => letterElements[i].style.color=c)
       if (wordGuess == word) {
        counterPlus()
        cong.classList.remove(HIDDEN);
        restart();
      } else  {
        counterPlus()
        if( trials == -1){
            fail.classList.remove(HIDDEN2);
            restart();
        }
    }
}
    }
    
    function counterPlus() {
        trials--;
        trialsUsed++;
        scounterUsed.innerHTML = 'Trial used' + ' :' + trialsUsed;
    }
    function restart(){
         trials = 2;
         trialsUsed = 0;
         setTimeout(() => {
            cong.classList.add(HIDDEN);
            fail.classList.add(HIDDEN2);
         }, 4000);
         
    }
