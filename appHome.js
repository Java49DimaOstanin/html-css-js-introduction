let str = "Hello";
let arStr = Array.from(str);
console.log("String Hi" ,arStr);
for (let i = 0; i < arStr.length;i++) {
    console.log( "element at idex " , i ,arStr[i]); // 
}
function println(element,index , array) {
    console.log("element at index " , index , element );
}
arStr.forEach(println);
let arCodeAscii = arStr.map(function(symbol, index) {
    // return index % 2 == 0 ? symbol.charCodeAt() : symbol;
    // return symbol.charCodeAt() + index;
    return symbol.charCodeAt();
});
console.log (arStr ,arCodeAscii);
let sumAscii = arStr.reduce(function(res, cur){
    return res + cur.charCodeAt();
}, 0);
console.log("Sum of ascii" , sumAscii);
console.log(arStr.reduce(function(res,cur){
return res + cur
}," ")); 