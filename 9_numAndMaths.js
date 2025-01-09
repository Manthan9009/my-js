// ********************* NUMBERS ***********************
const score = 200
console.log(score)  // 200
const bal = new Number(400)
console.log(bal)  // [Number: 400]

console.log(bal.toString()[0])  //4
console.log(bal.toFixed(2))  //400.00

const num = 24.8989879694   
console.log(num.toPrecision(4));  //24.90

const n = 1000000
console.log(n.toLocaleString());  //10,00,000
console.log(n.toLocaleString('en-IN')); //10,00,000

// ********************* MATHS ***********************
console.log(Math.abs(-4))  //4
console.log(Math.round(5.6))  //6
console.log(Math.ceil(5.6))  //6
console.log(Math.floor(5.6))  //5
console.log(Math.min(5,6,7,2,3,1,0))  //0
console.log(Math.max(5,6,7,2,3,1,0))  //7

console.log(Math.random())  // Always 0<x<1
console.log(Math.random()*10)  // 

// random value B/W any two values
const min = 10
const max = 20
console.log((Math.floor(Math.random() * (max-min+1)))+10)