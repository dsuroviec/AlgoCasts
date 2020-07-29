// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {

//use math.sign to get a 1 if positive or -1 if negative

// let reversed = n
//     //change to string so that we can use split reverse and join
//     .toString()
//     .split('')
//     .reverse()
//     .join('')
//     console.log(reversed)

// //use parse int to turn that 5- into a number which will drop the negative sign. then multiply by Math.sign of the passed value, which will determine if it is 1 or -1
// //reversed =  parseInt(reversed) * Math.sign(n)
// }

// console.log(reverseInt(-5))


//another way to write this without Math.sign is to use if statement saying that we need to turn it to a number, but if that number is supposed to be negative, we need multiply that num by -1
function reverseInt(n) {

    //use math.sign to get a 1 if positive or -1 if negative
    
    let reversed = n
        //change to string so that we can use split reverse and join
        .toString()
        .split('')
        .reverse()
        .join('')
    
debugger;

if (n<0){ return parseInt(reversed) * -1}

{return parseInt(reversed) * 1}

}

reverseInt(-5)


module.exports = reverseInt
