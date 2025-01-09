const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)  //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
marvel_heros.pop()

const a = marvel_heros.concat(dc_heros)  // Mandatory to create a new Array
console.log(a)  //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const new_heros = [...marvel_heros, ...dc_heros]  //Same as Concate
console.log(new_heros)  //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]  

const sample_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const new_sample_array = sample_array.flat(Infinity) //flat("Vlaue of depth") 
// Concats all sub array to main Array
console.log(sample_array) //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
console.log(new_sample_array)
// Above ans : [
            // 1, 2, 3, 4, 5,
            // 6, 7, 6, 7, 4,
            // 5
            // ]

console.log(Array.isArray("Mnthn"))  // false
console.log(Array.isArray(new_sample_array))  // true
console.log(Array.from("Mnthn"))  // [ 'M', 'n', 't', 'h', 'n' ]  // Makes An Array

console.log(Array.from({name : "Mnthn"}))  // [] //***IMP*** / //it gives empty array cuz can't convert directly!!

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
