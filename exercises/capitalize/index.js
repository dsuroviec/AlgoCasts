// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Grider solution 1 i like this solution

// function capitalize(str) {
//     //assign array variable to hold output
//     let results = []
//     //first split string into array, but just join it into the loop. 
//     //loop over the words in the string, and push the first letter of each word to upper case plus the rest of the word into the results array
// for (let word of str.split(' ')){
//     results.push(word[0].toUpperCase() + word.slice(1))
// }
// //convert the array back to a string seperated by space
// return results.join(' ')
// }
// console.log(capitalize('a lazy fox'))

// module.exports = capitalize;


//griders second solution


function capitalize(str) {
//create new array, but make sure the first letter of the passed str is always capitalized
let result = str[0].toUpperCase()

//loop over the rest of the string minus the first character
for (let i=1; i<str.length; i++){
    if (str[i-1]===" "){
        //if the character before is a space, upercase the following character and add it to the result
        result+= str[i].toUpperCase()
        // otherwise add everything else to the array that we are iterating
    }else{
    result += str[i]
}
}
return result
}
module.exports = capitalize;
