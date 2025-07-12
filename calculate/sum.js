// modules protect their variables and fuctions
console.log("sum module executed");

var x ="hello"

function calculateSum(a,b){

    const sum = a+b;
    console.log(sum);

}

module.exports = {
    x,
    calculateSum
}