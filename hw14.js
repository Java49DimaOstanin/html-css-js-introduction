let strings = ["abc","lmn","cd"];

function ulSurround(array) {
    let ularray = array.map(function(element){
        return "<li>"+element+"</li>";
    })
    ularray.splice(0,0, "<ul>");
    ularray.push("</ul>");
    return ularray;
}
let newStrings = ulSurround(strings);

  console.log("New Array look  => ", newStrings);
//============================

let strings2 = ["abc","lmn","cd","abc","abc"];

function count(array,string) {
   let counter = 0;
    for( let i = 0;i < array.length;i++){
        if(array[i] == string){
            counter++;
        }
    }
    return counter;
}

console.log(count(strings2 , "abc"));

//================================
let arS = [1,2,3,4,5,6,7]; 
let arD = [10,20,30,40,50,60,70];

function  arrayCopy(src,srcPos,dst,dstPos,length) {
    
    let arraycopy = src.slice(srcPos,srcPos+length);
    
    dst.splice(dstPos,0, arraycopy);

return dst;

    }
console.log(arrayCopy(arS,3,arD,4,3));


//================================
let numbers = [1,2,3,4,5,6,7,8];

function move(array,index,offset){

    let tempAr = array.slice(index,index+1);
    array.splice(index, 1);
   
    array.splice(index+offset, 0,  parseInt(tempAr));

    return array;
    
}
console.log(move(numbers,3,-1));


