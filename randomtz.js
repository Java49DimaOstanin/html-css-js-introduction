function generateRandomTeudatZehut() {
let randArray = Array(8).fill().map(() => Math.round(Math.random()*9)); 
// console.log("Random Number" , randArray);
let switchedArray = randArray.map(function( element,index) {
    return index % 2 == 0 ? element : multiplyXTwo(element) ;
    });
//  console.log("New version with x2" ,switchedArray);
 let sumofeight = switchedArray.reduce(function(res, cur){
    return res + cur;
}, 0);

let secretNumber = 10-(sumofeight % 10);
    return  "Random Number =>  " + randArray +" Secret Number => " + secretNumber;
}
console.log(generateRandomTeudatZehut());

    function multiplyXTwo(symbol){
        let res = symbol * 2; 
          return  sumDigits(res);
    
    }
    function sumDigits(number) {
        let sum = 0,rem = 0;
        while (number) {
            rem = number % 10;
            sum += rem;
            number = (number - rem) / 10;
        }
        return sum;
     }
    // function secretNumber (number){
    //    let secret = 10-(number % 10);
    //    return secret;
    // }