let a = "Mnthn"
let b = 30
console.log(a + b + " value")
console.log(`hi, my name is ${a} and my repoCount is ${b}`)

const str = new String("Mnthn")
console.log(str[0])    // M
console.log(str.__proto__)  // {}
console.log(str.length)  // 5
console.log(str.toUpperCase())  // MNTHN
console.log(str.charAt(2))  // t
console.log(str.charAt(100))  //  (blank O/P)
console.log(str.indexOf('n'))  // 1
console.log(str.indexOf('z'))  // -1

const newstr = "12-12-2024"
const newstr1 = newstr.substring(0,4)
console.log(newstr1)  //12-1
const newstr2 = newstr.slice(-8,7)
console.log(newstr2)  //-12-2

const strOne = "   Hellow   hi "
console.log(strOne)      //    Hellow   hi
console.log(strOne.trim())  //Hellow   hi

console.log(newstr.split('-'))  //[ '12', '12', '2024' ]

const url = "https://abc.com/abc%20xyz"
console.log(url.replace('%20','-'))  //https://abc.com/abc-xyz
console.log(url.includes('abc')) // true