// <, >, <=, >=, ==, !=, ===, !==
const temp = 40
if(temp === 40){
    console.log("Temp is 40deg")
}
else{
    console.log("Temp is not 40deg")
}

const bal = 1000
if(bal>500) console.log("test");
// if(bal>500) console.log("test"),
// console.log("test2");       // Runs butt not preferable

if(bal<500){
    console.log("less than 500")
}
else if(bal<750){
    console.log("less than 750")
}
else{
    console.log("Greater than 1000")
}

console.log()

//    &&, ||    (AND , OR)
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allowed");
}

const google = false
const email = true
if(google || email){
    console.log("Logged in");
}

console.log()

//SYNTAX OF SWITCH CASE
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        
    case 4:
        console.log("HEllowwww")
    default:
        break;
}
console.log();

//    truthy and falsy valsss
const userEmail = "Mnthn@gmail.com"
if(userEmail){
    console.log("got user")
}
else{
    console.log("Not email")
}
//FALSY VLAUES : 
        // false, 0, -0, (Bigint) 0n, "", null, undefined, NaN
//TRUTHY VLAUES : 
        // all except Falsy, "0", "false", " ", [], {}, function(){}
console.log();

const arr = []
if(arr.length===0){
    console.log("Arr is Empty")
}
console.log();

const emptyObj = {}
if(Object.keys(emptyObj).length==0){
    console.log("Object is Empty");
}
console.log()

//   Nullish Coalescing Operator(??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
let val2;
val2 = null ?? 10
console.log(val2);
console.log();

//Ternary Operator
// condition ? true : false
const price = 100
price>=100 ? console.log(">=100") : console.log("<100");