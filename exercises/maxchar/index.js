// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let toObj = {}
//iterate through object 

for (let char of str) {

    if (toObj[char]) {
         toObj[char]++
} else {
    toObj[char]= 1
   }
} 

//set helpers
let max = 0
let charMax = {}
//iterate through object using for IN and assign largest value
for (let char in toObj){
    console.log(char)
    if(toObj[char]> max){
    max = toObj[char];
    charMax = char
    }
}
return charMax
}

  
console.log(maxChar("hello There"))


module.exports = maxChar



//function maxChar(str) {

//first convert string to an object, so that you can compare the values of the keys and determine how many values, or what has the most
//Grider 1st solution
// let chars = {};

// for(let char of str) {
//     if (chars[char]) {
//         chars[char]++;
//     } else{ 
//         chars[char]=1;
//     }
// }console.log(chars)
// }