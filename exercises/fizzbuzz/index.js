// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//was almost able to do this but still needed Griders hints along the way because i set up the else statements backwards
function fizzBuzz(n) {

    for (let i= 1; i<=n; i++){
        //if number is divisable by both 3 and 5
    if (i % 3 === 0 && i % 5 ===0 ){
 console.log('fizzbuzz')
} else if(i % 3 === 0){
    console.log('fizz')
}else if(i % 5 === 0){
    console.log('buzz')
}else{
    console.log(i)
}
}
}
console.log(fizzBuzz(15))

module.exports = fizzBuzz;

//apparently theres a way to condense this into a 1 liner which isnt really necessary. But i think it's done using ternary
//.below is a failed method, i am not organizing the ternary right. 

// function fizzBuzz(n) {

//     for (let i= 1; i<=n; i++){
//         //if number is divisable by both 3 and 5
//     ((i % 3 === 0 && i % 5 ===0 ? console.log('fizzbuzz'):null)
//     ||(i % 3 === 0? console.log('fizz'): null)
//     ||(i % 5 === 0? console.log('buzz'): null))
//     ||console.log(i)

// }
// }
// console.log(fizzBuzz(15))

