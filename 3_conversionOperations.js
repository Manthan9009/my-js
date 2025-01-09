// ***********************  CONVERSION  ************************
let score = "33abc"
console.log(typeof score)  //string

let scoreNumber = Number(score)
console.log(typeof scoreNumber)  //number
console.log(scoreNumber)   //NaN
console.log(typeof score)  //string

score = Number(score)
console.log(typeof score)   //number
console.log()
//  "33"  ==>  33
//  "33aa"  ==> NaN

let a = null
console.log(typeof a)   //object

let b = Number(a)
console.log(typeof b)   //number
console.log(b)          //0
console.log()


let c = undefined
console.log(typeof c)   //undefined

let d = Number(c)
console.log(typeof d)   //number
console.log(d)          //NaN
console.log()


let e = true
console.log(typeof e)   //boolean

let f = Number(e)
console.log(typeof f)   //number
console.log(f)          //1 ==> for true   // 0 ==> for false         
console.log()

let x = null
console.log(x)
let y = Boolean(x)
console.log(y)
// 1 ==> true    // 0 ==> false
// "" ==> false   // "abc" ==> true
// null ==> false    // undefined ==> false