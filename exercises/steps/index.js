// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
// debugger;
// // Grider solution 1. in his video, he lays out the psudo illustration. i dont know how he came up with the greater than pattern of rows and columns but it works
// for(let rows = 0; rows<n; rows++){
//     let stair = ''

//     for(let columns = 0; columns <n; columns++){
//        if(rows >= columns){
//            stair += '#'
//        } 
//        else{
//            stair += ' '
//        }
//     }
// console.log(stair)
// }
// }

// steps(2)

// module.exports = steps;


//second solution...this is a recursive solution. i dont like recursion still at this point

function steps(n, row = 0, stair = ''){
if (n===row){
    return
}
if (n===stair.length){
    console.log(stair)
    return steps(n, row+1)
}
if(stair.length <= row){
    stair += '#'
} else{
    stair += ' ';
}
  steps(n,row, stair)  
}



module.exports = steps;