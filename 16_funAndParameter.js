function abc(){
    console.log("A");
    console.log("B");
    console.log("C");
}
abc()

function addition(num1,num2){
    console.log(num1+num2)
}
addition(1,2)  //3
addition(1,"2") //12
addition(1,"a")  //1a
addition(1,null)  //1

function product(num1,num2){
    return num1*num2
}
console.log(product(3,4))

function loginUserMessage(username = "sam"){
    return `${username} just logged in`
}
console.log(loginUserMessage("ABC"))
console.log(loginUserMessage())