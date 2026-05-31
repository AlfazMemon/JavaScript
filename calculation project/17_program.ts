export {};

let num1:number = 10;
let num2:number = 5;

console.log("Before Swap :");
console.log("num 1 =",num1);
console.log("num 2 =",num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After Swap :");
console.log("num 1 =",num1);
console.log("num 2 =",num2);