 

// Problem:
// Write a function that takes an array of numbers and returns how many numbers are greater than 10.

// Example:

// countGreaterThan10([5, 12, 8, 15, 20, 3])
// Output: 3

function countGreaterThan10(numbers){
    let count =0
    for(let number of numbers){
        if(number > 10){
            count++
        }
    }
    return count
}

// console.log(countGreaterThan10([5, 12, 8, 15, 20, 3]))
// console.log(countGreaterThan10([5, 12, 8, ]))








// Write a function that takes an array of numbers and returns how many numbers are less than 10.

// Example:

// countLessThan10([5, 12, 8, 15, 3, 20])
//  Output: 3



function countLessThan10(numbers){
    let count =0
    for(let number of numbers){
        if(number < 10){
            count++
        }
    }
    return count
}

// console.log(countLessThan10([5, 12, 8, 15, 3, 20]))
// console.log(countLessThan10([5, 12]))





// Problem:
// Write a function that takes an array of numbers and returns the first number greater than 10.

// Example:

// findFirstGreaterThan10([5, 8, 12,11, 15, 20])
//  Output: 12


function findFirstGreaterThan10(numbers){
    for(let number of numbers){
        if(number > 10){
            return number
        }
    }
}

console.log(findFirstGreaterThan10([5, 8, 12,11, 15, 20]))
console.log(findFirstGreaterThan10([5,11, 8, 12,11, 15, 20]))