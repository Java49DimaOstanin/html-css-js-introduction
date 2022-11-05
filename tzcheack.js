function checkTeudatZehut(teudatStrNumber) {
let TZnumber = +teudatStrNumber;
// console.log("TZ" ,TZnumber);
if (TZnumber.lenght < 9 || TZnumber.lenght > 9 ) {
    console.log("wrong number"); //don't understand why no work?
    return false;
}
let strARtz = "" +TZnumber;
let newAR = Array.from(strARtz);
let arTZ = newAR.map(function(symbol, index) {
    return index % 2 == 0 ? parseInt(symbol) : multiplyXTwo(symbol) ;
    });
    // console.log("ar TZ"  , arTZ );
 let tzsum = arTZ.reduce(function(res, cur){
        return res + cur;
    }, 0);
    // console.log("tz sum" ,tzsum);
let tzsumcheak = tzsum % 10;
   if (tzsumcheak == 0){
    return true;
   }else {
    return false;
   }
}
 console.log(checkTeudatZehut(332445873));
 console.log(checkTeudatZehut(33244587));
 console.log(checkTeudatZehut(332445874));
 console.log(checkTeudatZehut(332445865));

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

 