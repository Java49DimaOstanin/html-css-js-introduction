let numbs = [1, 2, 3, 4, 5];

function minMax(numbers) {
    let newArray = [];
    newArray.splice(0,0, numbers.reduce((res,cur) => cur < res ? res = cur: res,), numbers.reduce((res,cur) => cur > res ? res = cur: res,));
    return newArray;
}
console.log(minMax(numbs));

//=============================

let strings = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];

function deleteWithPrefix(strings, prefix) {

    return strings.filter((element) => !element.includes(prefix));                                         

}

console.log(deleteWithPrefix(strings, "old_"));
//=============================

let number=[1,6,3,8,5,2,7,4];

function getSortedEvenOdd(numbers) {

    // let newArray = [];
    // // newArray.splice(0,0, numbers.sort((a,b) => (a%2== 0)-(b%2==0) ,), numbers.sort((a,b) => (a%2!=0)-(b%2!=0),));
    // // newArray = numbers.sort((a,b) => (a%2== 0)-(b%2==0) );
    // newArray = numbers.sort((a,b) => (b%2!= 0)-(a%2!=0) );
    // return newArray;
    let resEven = numbers.filter((n) => n % 2 == 0);
    resEven.sort();
    let resOdds = numbers.filter((n) => n % 2 != 0);
    resOdds.sort();
    resOdds.reverse();
    resEven.splice(resEven.length,0 , ...resOdds);

    return resEven
}
console.log(getSortedEvenOdd(number));

