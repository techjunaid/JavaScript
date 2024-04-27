// add two numbers

let num1 = 67
let num2 = 56

let sum = num1 + num2
//console.log("sum :", sum)

// adding two numbers via function

function addingTwoNumbers (a,b){
      
    return a+b;
}

let num3 = 60
let num4 = 50

let sum1 = addingTwoNumbers (num1, num2)
//console.log("sum of given number is:", sum1)

// using arrow function

let addition = (num1, num2) => (num1+num2)

sum = addition(num1,num2)
console.log(sum)

console.log(typeof addition)
console.log(typeof num1)