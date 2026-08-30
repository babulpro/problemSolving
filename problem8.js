// Problem:
// Write a function that takes an array of numbers and returns how many 0s are in the array.

// Example:

// countZeros([1, 0, 5, 0, 3, 0])
//  Output: 3


function countZeros(numbers){
    let count=0
    for(let number of numbers){
        if(number ===0){
            count++
        }
    }
    return count
}


// console.log(countZeros([1, 0, 5, 0, 3, 0]))










//  Problem:
// Write a function that takes an array of numbers and returns how many times 5 appears.

// Example:

// countFive([5, 2, 5, 8, 5, 1])
//  Output: 3




function countFive(numbers){
    let count = 0
    for(let number of numbers){
        if(number===5){
            count++
        }
    }
    return count
}
// console.log(countFive([5, 2, 5, 8, 5, 1]))







//  Problem:
// Write a function that takes an array of numbers and returns the first even number.

// Example:

// findFirstEven([3, 7, 9, 4, 8])
// Output: 4


function findFirstEven(numbers){
    for(let number of numbers){
        if(number%2==0){
            return number
        }
    }
}

console.log(findFirstEven([3, 7, 9, 4, 8]))