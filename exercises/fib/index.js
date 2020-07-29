// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// //grider solution 1. 
// function fib(n) {
// // assign first couple elements because the sequence needs a beginning
// // to loop over  
//     //assign array to hold results and initiate sequence
//     let results = [0,1]
// //loop over array
//     for(let i=2; i<=n; i++){
//       let a = results[i-1];
//       let b = results[i-2];

//       results.push(a+b)
//     }
//     return results[n]
// }

// module.exports = fib;


// grider solution 2 using recursion
//want to use memoization to help reduce the 
//number of times the function needs to run
//thus reducing the runtime. 
//here is the slow fib solution
// function fib(n) {
//     if (n<2) {
//         return n
//     }
//     return fib(n-1) + fib (n-2)
// }

    
//     module.exports = fib;

//----------------------------------------------



    
//here is the fib solution with memoize. the point is to speed up the performance
function memoize(fn) {
    const cache = {};
    return function(...args){
        if (cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}



// original function, which is our SLOW FIB
    function slowFib(n) {
    if (n<2) {
        return n
    }
    return fib(n-1) + fib (n-2)
}
const fib = memoize(slowFib)
    
    module.exports = fib;
    