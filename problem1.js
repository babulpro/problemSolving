// Problem 1: Count Positive Numbers

// Problem:
// Write a function that takes an array of numbers and returns how many positive numbers are in the array.

// Example:

// countPositive([2, -5, 7, -1, 0, 9])
// Output: 3

function countPositive(numbers){
    let count =0

    for(let number of numbers){
        if(number > 0){
            count ++
        }
    }
    return count
}
 

// console.log(countPositive([2, -5, 7, -1, 0, 9]))
// console.log(countPositive([2, -5, 7, -1,]))
// console.log(countPositive([10,2, 7, -1, 0, 9]))




// Problem 2: Find the Smallest Number

// Problem:
// Write a function that takes an array of numbers and returns the smallest number.

// Example:

// findSmallest([8, 3, 12, 1, 6])
// Output: 1


function findSmallest(numbers){
    let smallest =numbers[0]
    for(let number of numbers){
        if(number < smallest){
            smallest = number
        }
    }
    return smallest
}

// console.log(findSmallest([8, 3, 12, 6]))
// console.log(findSmallest([8, 6]))
// console.log(findSmallest([8,5, 6]))
 