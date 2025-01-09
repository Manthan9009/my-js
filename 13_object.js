//singleton

//object literals
//Object.create

const sym = Symbol("key1")

const jsUser = {
    name : "Mnthn",
    [sym] : "myKey",    // To assign as Symbol
    age : 18,
    city : "Surat",
    email : "mnthn@gamil.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[sym])
console.log(typeof(jsUser[sym]))

jsUser.email = "Mnthn@chatgpt.com"   //To change data
// Object.freeze(jsUser)     // Now we can't change values of Object jsUser
jsUser.email = "Mnthn@microsoft.com"
console.log(jsUser.email)

//jsUser Unfreezed from here
jsUser.greetings = function(){
    console.log("Hello world")
}
jsUser.greetings2 = function(){
    console.log(`Hellow js User, ${this.name}`)
}
console.log(jsUser.greetings)  //undefined  [Function (anonymous)]
console.log(jsUser.greetings())  //Hello world 
console.log(jsUser.greetings2())  //Hello world 