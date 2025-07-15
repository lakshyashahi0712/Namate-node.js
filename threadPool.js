const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("1 cryptoDone")
})
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("2 cryptoDone")
})
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("3 cryptoDone")
})
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("4 cryptoDone")
})
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("5 cryptoDone")
})
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("6 cryptoDone")
})