var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a,b,c);    
}
// console.log(a); //error  //cuz Global Scope
// console.log(b);  //error  //cuz Global Scope
console.log(c);  //30  //cuz Global Scope
console.log(a);   //200