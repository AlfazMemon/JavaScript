export {};

let bill:number = 1200;
let GSTrate:number = 18;

let GSTamount:number = (bill * GSTrate) / 100;
let totalBill:number = bill + GSTamount;

console.log("Bill Amount :",bill);
console.log("GST Amount :",GSTamount);
console.log("Total Bill Amount :",totalBill);