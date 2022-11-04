function generateRandomTeudatZehut() {
    let randomarray = [];
for( let i = 0; i == 7;i++){
    randomarray[i] = Math.round(Math.random()*9);

}
let arCodeAscii = randomarray.map(function(symbol, index) {
    // return index % 2 == 0 ? symbol.charCodeAt() : symbol;
    // return symbol.charCodeAt() + index;
    return symbol;
});
console.log (arStr ,arCodeAscii);
}
console.log(generateRandomTeudatZehut());