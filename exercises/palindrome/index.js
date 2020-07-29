// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my soliton all on my own
// function palindrome(str){
//     return str === str.split('').reverse().join('')
// }
// console.log(palindrome('bib'))

// module.exports = palindrome;


//second soliton from Grider
//problem with this solution, is that it has to make double comparisons as it runs through the array after the midpoint
function palindrome(str){
    //turn string into an array because .every works on arrays
    //call for every on the array, and compare each element to the last element until it reaches the middle and the middle letter compares to itself
    return str.split('').every((char, i)=> {
     return char === str[str.length- i - 1]
    })
}
console.log(palindrome('bit'))

module.exports = palindrome;