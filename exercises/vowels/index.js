// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// // Grider solution 1. Easy problem. Can either use a string in the test variable like ='aeiou' but it may confuse so we used an array. 
// // and we added case sensitive test as well just in case

// function vowels(str) {
// let count = 0
// let test = ['a','e','i','o','u']
// for (let char of str.toLowerCase()){
//     if (test.includes(char)){
//         count++
//      }
//     }
// return count
// }
// vowels("happy day me")
// module.exports = vowels;

//grider second solution using regex
//brackets say we want to match all characters inside this bracket, g means dont stop at first one, and i means case insensitive
//match returns an array, so we want to assign it to a variable. but if there is no match, it returns null
//use ternary to handle the case of null. if condition is null aka false, then do this, else do this
//if matches is an array, return the matches.length. if there are no matches and it is null, return 0
function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
return matches ? matches.length: 0
}



    vowels("happy day me")
    module.exports = vowels;
