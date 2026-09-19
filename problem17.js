// Write a function sumEvenNumbers(numbers) that returns the sum of all even numbers in an array.

// Example:

// sumEvenNumbers([2, 5, 8, 3, 10]);
// Output: 20

function sumEvenNumbers(numbers){
    let sum =0
    for(let number of numbers){
        if(number % 2 ===0){
            sum += number
        }
    }
    return sum
}
// console.log(sumEvenNumbers([2, 5, 8, 3, 10]))
 











// Write a function findName(names, target) that checks whether a target name exists in an array.

// Return "Found" if the name exists, otherwise return "Not Found".

// Example:

// findName(["Babul", "Rahim", "Karim"], "Rahim");
// Output: "Found"


 

function findName(names, target){
    for(let name of names){
        if(name === target ){
            return "Found"
        }
    }
    
    return "Not Found"
}

// console.log(findName(["Babul", "Rahim", "Karim"], "amir"))









// Write a function removeDuplicates(numbers) that returns a new array containing each number only once.

// Example:

// removeDuplicates([1, 2, 2, 3, 1, 4]);
// Output: [1, 2, 3, 4]

function removeDuplicates(numbers){
    let result =[]
    for(let number of numbers){
        if(!result.includes(number)){
            result.push(number)
        }
    }
    return result
}
console.log( removeDuplicates([1, 2, 2, 3, 1, 4]))