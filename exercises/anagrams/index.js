// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//stephen grider first solution

// function anagrams(stringA, stringB) {
// // variables are from helper function below
// let aCharMap = buildCharMap(stringA);
// let bCharMap = buildCharMap(stringB);

// // if there aren't the same number of keys, return false right away
// if (Object.keys(aCharMap).length !=Object.keys(bCharMap).length){
//     return false
// }

// // iterate over one of the objects we created via character Map, then compare it to the other
// for (let char in aCharMap){
//     if (aCharMap[char] !== bCharMap[char]){
// return false
// }
// }
// //if neighter of the above are false, then we will say return true
// return true
// }
// //helper function that converts our strings to an object with keys so that we can compare them, and it also uses regex to get rid of everything except for lower case lettersand replace it with nothing
// function buildCharMap(str){ 
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap
// }
    
// anagrams('rail safety', 'fairy tales')

// module.exports = anagrams;


//second solution Grider. I like this solution better. 
//also, you can simplify making new variables for both strings
//originally i did it without making a helper function

function anagrams(stringA, stringB) {
return cleanString(stringA)===cleanString(stringB)
}

//create helper function to prepare string
function cleanString(str) {
return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
anagrams('rail safety', 'fairy tales')

module.exports = anagrams;