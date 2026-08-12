// Problem 5: Sum of Array Numbers

// Problem:
// Write a function that takes an array of numbers and returns the total sum.

// Example:

// sumNumbers([2, 4, 6, 8])
// Output: 20


function sumNumbers(numbers){
    let sum =0
    for(let number of numbers){
        sum += number
    }
    return sum
}

// console.log(sumNumbers([2, 4, 6, 8]))
// console.log(sumNumbers([10,20]))



 




// Problem 6: Count Odd Numbers

// Problem:
// Write a function that takes an array of numbers and returns how many odd numbers are in the array.

// Example:

// countOdd([1, 2, 3, 4, 5, 6])
// Output: 3

 
function countOdd(numbers){
    let count =0
    for(let number of numbers){
        if(number %2 !== 0){
            count++
        }
    }
    return count
}

// console.log(countOdd([1, 2, 3, 4, 5, 6]))
// console.log(countOdd([1, 2, 3,]))





// Problem 7: Find the Average

// Problem:
// Write a function that takes an array of numbers and returns the average.

// Example:

// findAverage([10, 20, 30, 40])
// Output: 25


function findAverage(numbers){
    let total =0
    for(let number of numbers){
        total+=number
    }

    let average= total/numbers.length
    return average
}

console.log(findAverage([10, 20, 30, 40]))
console.log(findAverage([10, 20]))


 