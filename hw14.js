let strings = ["abc","lmn","cd"];

function ulSurround(array) {
    // let ularray = array.map(function(element){
    //     return "<li>"+element+"</li>";
    // })
    let ularray = array.map(element => `<li>${element}</li>`)
    ularray.splice(0,0, "<ul>");
    ularray.push("</ul>");
    return ularray;
}
// let newStrings = ulSurround(strings);

//   console.log("New Array look  => ", newStrings);
console.log(`input: ${strings} output: ${ulSurround(strings)}`)

//============================

let strings2 = ["abc","lmn","cd","abc","abc","lmn"];

function count(array,element) {
    //====== 1 
//     for( let i = 0;i < array.length;i++){
//         if(array[i] == string){
//             counter++;
//         }
//     }
//     return counter;
       //========= 2 
// return array.reduce(function(counter, cur) {
//     return cur == string? counter+1: counter;
     
// },0);
      //===========  3
 return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);   // "0" start position    



}

console.log(count(strings2 , "lmn"));

//================================
let arS = [1,2,3,4,5,6,7]; 
let arD = [10,20,30,40,50,60,70];

function  arrayCopy(src,srcPos,dst,dstPos,length) {
    
     let arraycopy = src.slice(srcPos,srcPos+length);
    // dst.splice(dstPos,0, arraycopy);
    arraycopy.forEach((e,i) =>dst.splice(dstPos + i, 0 , e));
    
    // dst.splice(dstPos,0, ...src.slice(srcPos,srcPos+length));

 return dst;

    }
console.log(arrayCopy(arS,3,arD,4,3));


//================================
let numbers = [1,2,3,4,5,6,7,8];

function move(array,index,offset){

    array.slice(index,index+1);
    
   
    array.splice(index+offset, 0,  array.splice(index, 1)[0]);

     return array;
    
}
console.log(move(numbers,3,-1));


