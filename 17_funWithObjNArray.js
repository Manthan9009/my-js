function calCartPrice(a1,...num1){
    console.log(a1);
    console.log(num1);
}
calCartPrice(100,200,300)

const user = {
    name : "Mnthn",
    age : 18
}
function handleObj(anyObj){
    console.log(`Username is ${anyObj.name} and age is ${anyObj.age}`)
}
handleObj(user)

handleObj({
    name : "xyz",
    age : 18
})

const myArr = [200, 400, 100, 600]
function returnVal(arr){
    return arr[1]
}
console.log(returnVal(myArr))