const tinderUser = new Object()
console.log(tinderUser)  //{}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "sam@gamil.com",
    fullname : {
        userfullname : {
            firstname : "Mnthn",
            lastname : "Shingala"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);  //Mnthn

const obj1 = {
    1:"a", 2:"b"
}
const obj2 = {
    3:"C", 4:"d"
}
const obj3 = Object.assign({},obj1,obj2)  // target is {} otherwise target will be obj1 and it will update
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'C', '4': 'd' }
console.log(obj1)

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const user = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    }
]

console.log(user[1]);
console.log(user[0].id)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));