 
// Write a function that takes a string and returns the number of vowels in it.

// Example:

// countVowels("javascript")
// Output: 3


function countVowels(text){
    let count =0
    for(let i=0;i<=text.length;i++){
        if(text[i] === "a" || text[i]=== "e" || text[i]==="i" || text[i]==="o" || text[i]==="u"){
            count++
        }
    }
    return count
}
 
// console.log(countVowels("javascript"))

 



// Write a function that takes a number and returns its factorial.

// For example:

// 5! = 5 × 4 × 3 × 2 × 1 = 120

// Example:

// factorial(5)
//  Output: 120

function factorial(number){

    let result =1
    for(let i=1;i<=number;i++){
        result*=i
    }
    return result

}
 
// console.log(factorial(5))






// Write a function that checks whether a word is a palindrome.

// A palindrome reads the same forward and backward.

// Example:

// isPalindrome("madam")
//  Output: true
// isPalindrome("hello")
//  Output: false


function isPalindrome(text){
    let reverseText=""
    for(let i=text.length-1;i>=0;i--){
        reverseText+=text[i]
    }
     
    return text===reverseText
}
console.log(isPalindrome("hello"))
console.log(isPalindrome("madam"))