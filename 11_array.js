const myArr = [0,1,2,3,4,5, true, "Mnthn"]
console.log(myArr)   //[ 0, 1, 2, 3, 4, 5, true, 'Mnthn' ]
console.log(myArr[4])  //4
// JS array-copy operations creates "Shallow copies"

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)  //[ 1, 2, 3, 4, 5 ]
myArr2.push(20)
console.log(myArr2)  //[ 1, 2, 3, 4, 5, 20 ]
console.log(myArr2.pop())  //20
console.log(myArr2)  //[ 1, 2, 3, 4, 5 ]
myArr2.unshift(9)
console.log(myArr2)  //[ 9, 1, 2, 3, 4, 5 ]
console.log(myArr2.shift())  //9
console.log(myArr2)  //[ 1, 2, 3, 4, 5 ]
console.log(myArr2.includes(5))  //true
console.log(myArr2.indexOf(5))  //4

const newArr2 = myArr2.join()
console.log(newArr2)  // 1,2,3,4,5
console.log(typeof(newArr2))  //string

console.log()
//Slice & Splice
const sArr2 = myArr2.slice(1,3)
console.log(myArr2)  //[ 1, 2, 3, 4, 5 ]
console.log(sArr2) //[ 2, 3 ]

const spArr2 = myArr2.splice(1,3)
console.log(myArr2)  //[ 1, 5 ]
console.log(spArr2) //[ 2, 3, 4 ]