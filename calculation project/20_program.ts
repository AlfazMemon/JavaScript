export {};

let price :number = 5000;
let Discount:number = 15;

let DiscountAmount:number = (price * Discount) / 100;
let finalAmount:number = price - DiscountAmount;

console.log("Original Amount :",price);
console.log("Discount Amount :",DiscountAmount);
console.log("Final Amount :",finalAmount);