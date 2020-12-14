// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Darrens personal solutuion using Lodash

function maxChar(str) {
    let max = 0;
    let char = "";
    // convert to array to use Lodash...dont't need to split the array which is crazy
    // let split = str.split("");
    let obj = _.countBy(str);

    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            char = key;
        }
    }
}
maxChar("abddddddddeeeeeeeeeeedbcccc");

// Grider's Solution

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//     console.log(charMap)
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

maxChar("abddddddddeeeeeeeeeeedbcccc");

module.exports = maxChar;
