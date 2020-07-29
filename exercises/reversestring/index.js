// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//solution using reduce method, can simplify this by removing second return, and the inner curly braces
// function reverse(str) {
//     return str.split('').reduce((rev, char) =>{
//      return char + rev;
//     }, '');
// }

//es6 version of above solution
// function reverse(str){
//     return str.split('').reduce((rev,char)=>char + rev, '')
// }



//mySolution 1 works
    // let results = []
    // for (let i = str.length -1; i>=0; i--){
    // results.push(str[i]);
    // }
    // return results.join('')
    // }   
    // console.log(reverse("hello"));  


    //mySolution 2 works

function reverse(str){
return str
    .split('')
    .reverse()
    .join('')
}
console.log(reverse('hello'))


 

//  function reverseString(str) {

//     //split str to array
//     let split = str.split('')
//   //loop over split array to find the index of each letter, then reverse the order of the array and store them into the result variable
//     let reversedOrder = []
//     for(let character of split){
//     let toIndex =split.indexOf(character)
  
//    //push indexs to an array
//    reversedOrder.push(toIndex)
//    //sort reverse the direction of the indexes
//    reversedOrder.sort(function(a, b){return b-a});
//    }
  
  
//     let reversed = []
//    //loop over reversed indexs, and find the character at those indexs in the original string
//    for(let number of reversedOrder){
//    let answer =str.charAt(number)
//    //push the characters into an array
//    reversed.push(answer)
//    //join the characters to a string
//    }
//     return reversed.join("");
//   }
  
//   console.log(reverseString("hello"));
  
