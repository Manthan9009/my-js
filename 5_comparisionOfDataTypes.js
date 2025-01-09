console.log("2" > 1)  // true
console.log("02" > 1)  // true
console.log()

//  * null Case is IMP  
console.log(null > 0)  // false
console.log(null == 0)  // false
console.log(null >= 0)  // true
console.log()

console.log(undefined > 0)  // false
console.log(undefined == 0)  // false
console.log(undefined <= 0)  // false    // Undefined all comparision will be False
console.log()

//  Strict Check ==> "==="
console.log("2" == 2)  // true    // it will converts automatically
console.log("2" === 2)  //false   // Not converts, Strictly checks