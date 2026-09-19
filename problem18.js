// Write a function that takes an array and returns the elements in reverse order.

// Example:

// reverseArray([1, 2, 3, 4, 5]);

// Output: [5, 4, 3, 2, 1]


 function reverseArray(numbers){
    let result=[]
    for(let i = numbers.length-1;i>=0;i--){
        result.push(numbers[i])
    }
    return result
 }

//  console.log(reverseArray([1, 2, 3, 4, 5]))





// Write a function that takes an array of numbers and returns the smallest number.

// Example:

// findSmallest([12, 5, 8, 2, 20]);

// Output: 2



function findSmallest(numbers){
    let smallest=numbers[0]
    for(let number of numbers){
        if(number < smallest){
            smallest=number
        }
    }
    return smallest
}

// console.log(findSmallest([12, 5, 8, 2, 20]))





// Write a function that takes an array and a number. Return true if the number exists in the array; otherwise, return false.

// Example:

// containsNumber([10, 20, 30, 40], 30);

// Output: true

function containsNumber(numbers,target){
    for(let number of numbers){
        if(number===target){
            return true
        }
    }
    return false
}


console.log(containsNumber([10, 20, 30, 40], 300))