console.log("hello world")

var a = 31232
var b = 45321235

setTimeout(()=>{
    console.log("call me immediately");
},0);


function multiplyFn(x,y){

    var result = a*b;
    return result;

}

var c = multiplyFn(a,b);
console.log(c);