//require("./xyz")

//const obj = require("./sum")
//const {x,calculateSum} = require("./calculate/sum")

const {calculateSum,calculateMultiply} = require("./calculate/index")

const data = require("./data.json")
console.log(data)

var name = "namaste javascript"

var a = 10;
var b = 20;

calculateMultiply(a,b);
//obj.calculateSum(a,b)
calculateSum(a,b)
 

// console.log(global);


//console.log(obj.x);
//console.log(x);