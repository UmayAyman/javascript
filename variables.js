var x = 10;
var y = 20;
let a = "hello";
const b = "world";

var sum = x + y;

console.log("The sum of x and y is: " + sum);
console.log("Value of a is: " + a);
console.log("Value of b is: " + b);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("demo").innerHTML = "Value of a is: " + a;
    document.getElementById("demoo").innerHTML = "Value of b is: " + b;
});