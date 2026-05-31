export {};

let sub1:number = 89;
let sub2:number = 88;
let sub3:number = 98;
let sub4:number = 95;
let sub5:number = 72;

let totalmarks:number = 500;
let obtainmarks:number = sub1 + sub2 + sub3 + sub4 + sub5;

let percentage:number = (obtainmarks / totalmarks) * 100;

console.log("Obtain Marks =",obtainmarks);
console.log("Percentage =",percentage + "%");
