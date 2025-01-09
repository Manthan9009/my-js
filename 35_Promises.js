const promiseOne = new Promise(function (resolve, reject){
    //Do an Async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async class is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai", email: "abc@gamil.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "ABC", password:"123"})
        }
        else{
            reject('Error Something Wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.userName
})
.then((userName)=>{
    console.log(userName)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{console.log("Finally Triggered")})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "JavaScript", password:"123"})
        }
        else{
            reject('JS Went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E : ",error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error : ",error)
})