export {};

let principal:number = 5000;
let rate:number = 5;
let time:number = 2;

let amount:number = principal * Math.pow((1 + rate / 100),time);

let compoundIntrest:number = amount - principal;

console.log("Compound Intrest =",compoundIntrest);