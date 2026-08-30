// Write a function that takes an array of numbers and returns how many numbers are greater than 20.

// Example:

// countGreaterThan20([10, 25, 30, 15, 40])
//  Output: 3


function countGreaterNumber(numbers){
    let count =0
    for(let number of numbers){
        if(number >= 20){
            count++
        }
    }
     
    return count
    
}

// console.log(countGreaterNumber([10, 25, 30, 15, 40]))













// Write a function that takes an array of numbers and returns the sum of all positive numbers.

// Example:

// sumPositive([5, -2, 10, -4, 3])
//  Output: 18


function sumPositive(numbers){
    let total=0
    for(let number of numbers){
        if(number >= 0){
            total+=number
        }
    }
    return total
}

// console.log(sumPositive([5, -2, 10, -4, 3]))








// Write a function that takes an array of numbers and returns the sum of all negative numbers.

// Example:

// sumNegative([5, -2, 10, -4, 3])
//  Output: -6

function sumNegative(numbers){
    let total=0
    for(let number of numbers){
        if(number <= 0){
            total+=number
        }
    }
    return total
}

console.log(sumNegative([5, -2, 10, -4, 3]))