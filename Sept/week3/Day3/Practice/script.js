//Part - 1//

// Basic Function Questions practice.

//1. Write a named function greet() that prints "Hello JavaScript".
   function greet(){
    console.log("Hello JavaScript");
   }
   greet();


// 2.Create a function add() that takes two numbers and prints their sum.
   function add(a,b){
    console.log(a+b);
   }
   add(10,15);


//3. add(10, 20); // 30
function add(a,b) {
    console.log(a+b);
    
}
add(10,20);


//4. Create a function subtract(a, b) that returns the difference.
// function subtract(a,b){
//     return a-b;
// }
// let result = subtract(50,25);
// console.log(result);

//5. Create a function multiply(a, b) that returns the multiplication of two numbers.
function multiply(a, b){
    console.log(a*b);
}
multiply(20, 5);


//6. Create a function isEven(num) that checks whether a number is even or odd.
function isEven(num){
    if(num %2 ===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
isEven(10);
isEven(27);


//7. Create a function square(num) that returns the square of a number.
function square(num){
    return num*num;
}
let result= square(4,4);
console.log(result);


//8. Create a function findLargest(a, b) that returns the larger number.
function findLargest(a,b){
    if(a>b){
       return a;
    }else{
        return b;
    }
}
console.log(findLargest(66,35));


//9. Create a function checkAge(age) that prints:
function checkAge(age){
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Minor");
    }
}
checkAge(33);
checkAge(13);


//10. "Eligible" if age is 18 or above
function checkAge(age){
    if(age>=18){
        console.log("Eligible");
    }else{
        console.log("Not Eligible");
    }
}
checkAge(45);
checkAge(10);

//Part -2 //

//1. Write an anonymous function that prints "Hello World".
let fun = function () {
console.log("Hello World");
}
fun();


//2. Store an anonymous function inside a variable and call it.
let num = function (){
    console.log("Hyy");
}
num();


// Create an expression function add that takes two numbers and returns their sum.
// Create an arrow function that takes two numbers and returns their multiplication.
// Convert this normal function into an arrow function:
// function square(num) {
//     return num * num;
// }
// Create an arrow function that checks whether a number is positive or negative.