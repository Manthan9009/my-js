// "for..of" Loop

const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i)
}

const greetings = "Hello! How are you?"
for (const i of greetings) {
    // console.log(i);
}

// Maps
const map = new Map()
map.set('in','india')
map.set('us','United states of america')
map.set('fr','france')
map.set('fr','paris')
// console.log(map)

for (const i of map) {
    // console.log(i)
}
for (const [i,j] of map) {
    // console.log(`key : ${i}, value : ${j}`)
}

// const myObj = {
//     "game1" : "NFS",
//     "game2" : "GTA"
// }
// for (const i of myObj) {  //ERROR
//     console.log(i)
// }


//  "for..in"  Loop
const oneObj = {
    js : "Javascript",
    cpp : "c++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in oneObj) {
    console.log(key, oneObj[key])
}
console.log()

// "foreach" Loop
const coding = ["js", "cp", 'java', 'py', 'html']

coding.forEach( function(item) {
    // console.log(item)
});
coding.forEach((element) => {
    // console.log(element)
});

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr1) => {
    console.log(item, index, arr1)
});
console.log()

const myCoding = [
    {
        lang : "javascript",
        lname : "js"
    },
    {
        lang : "python",
        lname : "py"
    },
    {
        lang : "ruby",
        lname : "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.lname);
});