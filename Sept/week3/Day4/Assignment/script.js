//1. Store a student's marks in 5 subjects. Calculate the total marks and percentage.
let math = 95;
let science = 70;
let english = 65;
let odia = 90;
let hindi = 85;

let Total = math + science + english + odia + hindi;
let percentage = Total/5; 


console.log("Total marks = "+ Total);
console.log("percentage = "+ percentage + "%");


// 2. A product costs ₹1200 and has a 15% discount. Calculate the discount amount and final price.

let costs = 1200;
let discount = 15;

let discountAmount = (costs+discount)/100;
let finalprice = (costs-discountAmount);

console.log("Discount Amount = "+ discountAmount);
console.log("final price = "+ finalprice);



// 3.Take a number and determine its square and cube using operators.
 let num = 30;

 console.log(30**2);
 console.log(30**3);



//  4.Take a number and check whether it is positive, negative, or zero.

let number = -47;
if(number>=0){
        console.log("positive"); 
}else if(number<=0){
        console.log("negative");
}else{
         console.log("zero");
}


// 5. ake a student's marks and display:
// - `90–100` → A
// - `80–89` → B
// - `70–79` → C
// - `60–69` → D
// - Below `60` → Fail

let marks = 75;

switch(true){
    case marks >=90 && marks <=100:
        console.log("A");
        break;
    case marks >=80 && marks <=89:
        console.log("B");
        break;
    case marks >=70 && marks <=79:
        console.log("C");
        break;
    case marks >=60 && marks <=69:
        console.log("D");
        break;  
    default:
        console.log("Fail");
        break;
}


// 6.Take a number and check whether it is even or odd.

let digit= 459;

if(digit%2===0){
    console.log("even");
}else{
    console.log("odd");
}


// 7.Take three numbers and find the largest number using conditional statements.

let a = 65;
let b = 33;
let c = 78;

if(a>=b && a>=c){
     console.log("A is larger");
}else if(b>=a && b>=c){
     console.log("B is larger");
}else{
     console.log("C is larger");
}


// 8.Print the following pattern:
// 1
// 12
// 123
// 1234
// 12345


// 9.Count how many numbers between 1 and 100 are divisible by both 3 and 5.

let count = 0;
for (let i = 1; i <= 100; i++) {
    if(i%3===0 && i%5===0){
        count++;
    }
    

}
console.log(count);


// 10.Take a number and calculate its factorial.


// 11.Create a function that takes a number and prints its multiplication table.
function fun(num){
    for(let i=1;i<=10;i++){
        console.log(num +"*"+i+"="+(num*i));
    }
}
fun(4)




// 12.Create a function that takes two numbers and returns their sum.
function Sum(a , b){
    return a+b;
}
let result = Sum(20 , 15);
console.log(result);

// 13.ATM Simulation

// Create a simple ATM program with:

// - Initial balance = ₹10,000
// - Deposit
// - Withdraw
// - Check balance

let balance = 10000;

function deposite(amount){
       balance = balance + amount ;
      console
}
