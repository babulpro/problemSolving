// Write a function that takes an array of numbers and returns the total sum.

function sumArray(numbers) {
    let total=0
    for(let number of numbers){
        total+=number
    }
    return total
 
}

// console.log(sumArray([5, 10, 15, 20]));
// Expected: 50



 



// Write a function that takes an array of numbers and returns the smallest number.

function findSmallestNumber(numbers) {
    let smallest=numbers[0]
    for(let number of numbers){
        if(number<= smallest){
            smallest=number
        }
    }
    return smallest
 
}

// console.log(findSmallestNumber([12, 5, 8, 2, 20]));
//  Expected: 2










// Write a function that takes an array of numbers and returns how many numbers are odd.

function countOddNumbers(numbers) {
    let totalOdd=0
    for(let number of numbers){
        if(number % 2===0){
            totalOdd++
        }
    }
    return totalOdd
    
}

console.log(countOddNumbers([1, 2, 3, 4, 5, 7, 8]));
//  Expected: 3