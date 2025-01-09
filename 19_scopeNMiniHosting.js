function one(){
    const name = "Mnthn"

    function two(){
        const age = 18
        console.log(name)  //Mnthn
    }
    // console.log(age)  //Error
    two()
}
one()

// **** Intresting ****
console.log(addOne(5))  //6
function addOne(num){
    return num+1
}
console.log(addOne(5))  //6

// console.log(addTwo(5))  //ERROR
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))  //7