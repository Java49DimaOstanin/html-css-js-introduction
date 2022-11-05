function checkTeudatZehut(teudatStrNumber) {
    if (teudatStrNumber.length < 9 || teudatStrNumber.length > 9 || isNaN(teudatStrNumber)) {
        console.log("wrong number"); 
        return false;
    }
    let newAR = Array.from(teudatStrNumber).map(function(symbol, index) {
        return index % 2 == 0 ? parseInt(symbol) : multiplyXTwo(symbol) ;
        }).reduce(function(res, cur){
            return res + cur;
        }, 0);
    let tzsumcheak = newAR % 10;
       if (tzsumcheak == 0){
        return true;
       }else {
        return false;
       }
    }
     console.log(checkTeudatZehut("332445873"));
     console.log(checkTeudatZehut("33244587"));
     console.log(checkTeudatZehut("33244587b"));
     console.log(checkTeudatZehut("332445865"));
    
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