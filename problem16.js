// Write a function countPositive(numbers) that counts how many positive numbers are in an array.

// Example:

// countPositive([-2, 5, 8, -1, 0, 3]);
//  Output: 3


function countPositive(numbers){
    let count =0
    for(let number of numbers){
        if(number>0){
            count++
        }
    }
    return count
}

// console.log(countPositive([-2, 5, 8, -1, 0, 3]))




// Write a function findLargest(numbers) that returns the largest number from an array.

// Example:

// findLargest([12, 5, 27, 8, 19]);
// Output: 27


function findLargest(numbers){
    let largeNumber=numbers[0]
    for(let number of numbers){
        if(number >largeNumber){
            largeNumber=number
        }
    }
    return largeNumber
}
// console.log(findLargest([12, 5, 27, 8, 19]))







// Write a function countLongWords(words) that counts how many words have more than 5 characters.

// Example:

// countLongWords(["apple", "banana", "cat", "javascript", "book"]);
//  Output: 2

function countLongWords(words){
    let count =0
    for(let word of words){
        if(word.length > 5){
            count++
        }
    }
    return count
}

console.log(countLongWords(["apple", "banana", "cat", "javascript", "book"]))