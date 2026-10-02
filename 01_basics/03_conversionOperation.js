let score = 33
console.log(typeof score);   // number 
console.log(typeof (score));  // number

let score = "33"
console.log(typeof score);  // string
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number

let score = "33abc"
console.log(typeof score);  // string
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN - not a number , to kabhi jaisai 33abc ek number ni hai voh still convert ho rh hai to yeh issue hai to hamesha dekh kr karai


let score = null // 0
let score = undefined // NaN
let score = true // 1
// or agar kisi string ko convert krogai number mai to NaN aayega

let isLoggedIn = 1
let booleanIsLoggedIn = Boolena(isLoggedIn)
console.log(booleanIsLoggedIn);  // true

let isLoggedIn = ""
let booleanIsLoggedIn = Boolena(isLoggedIn)
console.log(booleanIsLoggedIn);  // false

let isLoggedIn = "Hitesh"
let booleanIsLoggedIn = Boolena(isLoggedIn)
console.log(booleanIsLoggedIn);  // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);