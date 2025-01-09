const user = {
    name : "Mnthn",
    age : 18,
    welcomeMessage : function(){
        console.log(`${this.name}, Welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.name = "Sam"
user.welcomeMessage()

console.log(this)  //{}


const chai = function(){
    let name = "Mnthn"
    console.log(this)  //TOO MANY THINGS
    console.log(this.name)  //undefined
}
chai()

const hello = () =>{
    console.log(this)  //{}
}
hello()

// const addTwo = (n1,n2)=>{
//     return n1+n2
// }
const addTwo = (n1,n2)=> n1+n2   //Works same as Above    //IMPLECIT FUNCTION

console.log(addTwo(1,2))

const abc = () => ({name : "Mnthn Shingala"})   //To return Object
console.log(abc())   //{ name: 'Mnthn Shingala' }