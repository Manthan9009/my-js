const coding = ['js', 'ruby', 'java', 'python', 'cpp']

//  *** forEach 
const values1 = coding.forEach((item) => {
    console.log(item)
})
console.log(values1); //undefined
console.log();

const values2 = coding.forEach((item) => {
    // console.log(item)
    return item
})
console.log(values2); //undefined
console.log()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  *** filter 
const newNums = myNums.filter((num) => num > 4)
console.log(newNums);

const newNums2 = myNums.filter((num) => {
    return num > 4
})
console.log(newNums2);

const newnums3 = []
myNums.forEach((num) => {
    if (num > 4) {
        newnums3.push(num)
    }
})
console.log(newnums3);
console.log();

//  *** map 
const addNums = myNums.map((num) => num + 10)
console.log(addNums);

const addNums1 = myNums.map((num) => {
    return num + 10
})
console.log(addNums1);
console.log();

const anum = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(anum);
console.log();

//  *** reduce
const myTotal = myNums.reduce(function(acc, val) {
    console.log(`acc : ${acc}, value : ${val}`)
    return acc + val
}, 2)
console.log(myTotal);

const myTotal1 = myNums.reduce((acc, val) => acc + val, 2)
console.log(myTotal1);
console.log();

const shoppingCart = [{
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "ruby course",
        price: 1499
    },
]

const total = shoppingCart.reduce((acc, i) => acc + i.price, 0)
console.log(total);