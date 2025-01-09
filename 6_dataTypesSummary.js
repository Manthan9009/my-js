// PRIMITIVE
//     7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// REFERENCE (NON-PRIMITIVE)
//     types : Arrays, Objects, Functions
     const arr = ["A" , "B", "C"] //array

     let myObj = {         // Object
        name : "Mnthn",
        age : 18
     }

     const myFunction = function(){
        console.log("in myFunction")
     }

     console.log(typeof arr)  // object
     console.log(typeof myObj)  // object 
     console.log(typeof myFunction)  // function