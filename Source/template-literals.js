let name = "Bob";
var age = 25;
let city = 'New York';
const country = 'USA';

//console.log(name, age, city); // Bob 25 New York
console.log(`${name} is from ${city}  and lives in ${country}`); // Bob is from New York and lives in USA

function getReasonCount(){return 1;}

let interpolation =  `Give me ${ (getReasonCount() == 1) ?'one good reason' : 'a few reason' } to try this.` ;

console.log(interpolation)