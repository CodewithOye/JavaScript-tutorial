let a = 10.9;
let b = "90";
let d = "1.9";
d = parseFloat(d,10)
b = parseInt(b, 10);
let c = a + b + d;
console.log('Answer: ' + c);

let nan = parseInt('nan', 10);
 console.log(nan)
let e = isNaN(nan)

console.log(e)