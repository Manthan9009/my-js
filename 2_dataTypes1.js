"use strict"; //treat all JS code as newer version

// alert("Hello") // We are using Node js not browser

let name = "Mnthn"  //string
let age = 18  // number
let isLoggerIn = false   //boolean

//       --* DATA TYPES *--
// number => RANGE :  2^53
// bigint 
// string
// boolean
// null  => Standalone value
// undefined   => 
// symbol => Used to define Uniqueness

// object

console.log(typeof null)  // object
console.log(typeof undefined)  // undefined

let val = Symbol('123')
let val1 = Symbol('123')
console.log(val==val1)  // false
console.log(val===val1)  // false
console.log(val)   //Symbol(123)
console.log(val1)  //Symbol(123)