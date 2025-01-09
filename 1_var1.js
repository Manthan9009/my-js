const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPass = "abcd1234"
accountCity = "Vyara"
let accountState

// Prefer not to use "var"
// cuz of issue in block scope and Functional scope

// accountId = 2  THROWS ERROR
accountEmail = "xyz@gmail.com"
accountPass = "768687"
accountCity = "AMD"

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity, accountState])