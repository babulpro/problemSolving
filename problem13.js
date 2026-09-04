// Write a function that takes a string and removes all spaces.

// Example:

// removeSpaces("hello world javascript")
// Output: "helloworldjavascript"



function removeSpaces(text){
    let result ="";
    for(let i=0;i<=text.length;i++){
        if(text[i] !== " "){
            result+=text[i]
        }
    }

    return result
}

// console.log(removeSpaces("hello world javascript"))










// Write a function that takes a number and returns the sum of all its digits.

// Example:

// sumOfDigits(1234)
// Output: 10
 
function sumOfDigits(number){
    let sum =0
    while(number>0){
        let digit = number % 10;
        sum+=digit
        number=Math.floor(number/10)
    }
    return sum
}

// console.log(sumOfDigits(1234))











// Write a function that takes an array and returns the first number that appears more than once.

// Example:

// findDuplicate([2, 5,2,3,2, 8])
//  Output: 5

function findDuplicate(numbers){
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]===numbers[j]){
                return numbers[i]
            }
        }
    }
  return null   
}

// console.log(findDuplicate([2, 5,2, 3, 5, 8]))





