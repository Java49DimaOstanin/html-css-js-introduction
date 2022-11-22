function isAnagram(str1,str2) {
    // let anagramCheck = false;
    // if(str1.length != str2.length) {
    //     anagramCheck;
    //    }
let arStr1 = Array.from(str1);
let arStr2 = Array.from(str2);
    const occurrences = {};
    arStr1.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });

    arStr2.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]--;
            
        } else {
            occurrences[element] =  occurrences[element];
            
        }
    });
    
    const isEmpty = Object.values(occurrences).every(x => x === 0);
    
    
    // console.log(occurrences);
    return isEmpty;
 }
let word = "yellow";


console.log(isAnagram(word, 'weloly'));

console.log(isAnagram(word, 'leloyw'));

console.log(isAnagram(word, 'wolley'));

console.log(isAnagram(word, 'weloyl'));



console.log(isAnagram(word, 'weloll')); 

console.log(isAnagram(word, 'leloy')); 

console.log(isAnagram(word, 'wollet')); 

console.log(isAnagram(word, 'weloyo'));