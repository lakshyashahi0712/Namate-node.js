const fs = require("fs")
const https = require("https");

console.log("hello world");

var a = 45346;
var b = 26523637523;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data successfully")
});

setTimeout(() => {
    console.log("settimeout called after 5 sec")
}, 5000);

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("file data:" , data)
});

function multiplyFn(x,y){
    const result =a*b;
    return result
}


var c = multiplyFn(a,b);
console.log("multiply result is :", c);
