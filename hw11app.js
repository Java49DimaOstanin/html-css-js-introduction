
function sumDigits(number) {
   // let sum;
         for( sum = 0 ,rem = 0;number > 0;  )   {

            rem = number % 10;
            sum = sum + rem;
            number = (number - rem) / 10;
            
         }
       return sum;
}
console.log("sum of digits" ,sumDigits(1234));
