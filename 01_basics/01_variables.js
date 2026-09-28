// const - value cant change
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountState = undefined 

// accountId =2 // not allowed
// let and var are used for same purpose but now we dont use 
// Prefer not to use var
// because of issue in block scope and functional scope
// Because `let` and `const` are safer and block-scoped, while `var` can cause unexpected scope-related bugs.


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console. log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])