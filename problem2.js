// 🟢 Problem 3: Count Even Numbers

// Problem:
// Write a function that takes an array of numbers and returns how many even numbers are in the array.

// Example:

// countEven([1, 2, 4, 7, 8, 9])
// Output: 3

function countEven(numbers){
    let count =0
    for(let number of numbers){
        if(number%2 === 0){
            count++
        }
    }
    return count
}

// console.log(countEven([1,2,3,4,5,6,7]))
// console.log(countEven([1,2,10,150,220]))




 
// Problem 4: Find the Largest Number

// Problem:
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// findLargest([5, 12, 3, 20, 8])
// Output: 20


function findLargest(numbers){
    let largestNumber=numbers[0]
    for(let number of numbers){
        if(number >= largestNumber){
            largestNumber = number
        }
    }
    return largestNumber
}
 
console.log(findLargest([5, 12, 3, 20, 8]))
console.log(findLargest([5, 12, 3, 20, 8,100,400]))