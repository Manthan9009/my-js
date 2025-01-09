// ************** DATES *************
let mydate = new Date();
console.log(mydate)  //2024-12-16T18:26:05.242Z
console.log(mydate.toString())  //Mon Dec 16 2024 23:57:44 GMT+0530 (India Standard Time)
console.log(mydate.toDateString())  //Mon Dec 16 2024
console.log(mydate.toISOString())  //2024-12-16T18:27:44.367Z
console.log(mydate.toJSON())  //2024-12-16T18:27:44.367Z
console.log(mydate.toLocaleDateString())  //16/12/2024
console.log(mydate.toLocaleString())  //16/12/2024, 11:57:44 pm

console.log(typeof(mydate))  // object

let myNewDate = new Date(2023,0,23, 5, 3)
console.log(myNewDate)  //2023-01-22T18:30:00.000Z
console.log(myNewDate.toString())  //Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
console.log(myNewDate.toLocaleString())  //23/1/2023, 5:03:00 am 

let myCreatedDate = new Date("2023-01-24")  
console.log(myCreatedDate.toLocaleString())  //24/1/2023, 5:30:00 am

let myISTDate = new Date("01-14-2023")  
console.log(myISTDate.toLocaleString())  //14/1/2023, 12:00:00 am
console.log()

let myTimeStamp = Date.now()
console.log(myTimeStamp)   // 1734453768473    // Mili Secs
console.log(myISTDate.getTime()) // 1673634600000

console.log(Math.floor(Date.now()/1000))  //1734454125    //Secs

let newDate = new Date()
console.log(newDate)  //2024-12-17T16:50:15.661Z
console.log(newDate.getMonth())  //11     //Cuz months starts by 0
console.log(newDate.getDay())  //2

newDate.toLocaleString('default', {
    weekday : "long"
})