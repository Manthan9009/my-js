//Object Literal
const user = {
    userName : "Manthan",
    loginCount : 8,
    signIn : true,

    getUserDetails : function(){
        console.log("Got user details from Database")
        console.log(`Username : ${this.userName}`)
        console.log(this)
    }
}
// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this);  //{}


function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    return thisṇ
}

const userOne = new User("Mnthn",9,false);
const userTwo = new User("ABC",11,true);
console.log(userOne.constructor)
console.log(userTwo)