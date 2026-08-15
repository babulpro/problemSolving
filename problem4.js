// Find Negative Numbers

// Problem:
// Write a function that takes an array of numbers and returns how many negative numbers are in the array.

// Example:

// countNegative([5, -2, 8, -4, -1, 7])
//  Output: 3


 
function countNegative(numbers){
    let count=0
    for(let number of numbers){
        if(number < 0){
            count++
        }
    }
    return count
}


// console.log(countNegative([5, -2, 8, -4, -1, 7]))
// console.log(countNegative([5, -2, 8, -4]))

 



// Problem 9: Find the Sum of Even Numbers

// Problem:
// Write a function that takes an array of numbers and returns the sum of all even numbers.

// Example:

// sumEven([1, 2, 3, 4, 5, 6])
//  Output: 12


 function sumEven(numbers){
    let sum =0
    for(let number of numbers){
        if(number%2==0){
            sum+=number
        }
    }
    return sum
 }
 
//  console.log(sumEven([1, 2, 3, 4, 5, 6]))
//  console.log(sumEven([1, 2, 3, 4]))








// Problem 10: Find the Sum of Odd Numbers

// Problem:
// Write a function that takes an array of numbers and returns the sum of all odd numbers.

// Example:

// sumOdd([1, 2, 3, 4, 5, 6])
// Output: 9

function sumOdd(numbers){
    let sum =0
    for(let number of numbers){
        if(number % 2==1){
            sum+=number
        }
    }
    return sum
}
 
console.log(sumOdd([1, 2, 3, 4, 5, 6]))
console.log(sumOdd([1, 2, 3]))