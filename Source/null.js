// null represent a variable that points to nothing 
let a;
console.log(a)
console.log(typeof a)

let pattern = /xyz/;
//let value2 = /xyz/;
let value = "This is just a test"
let result = value.match(pattern);
console.log(result)
console.log(typeof result)


if(result === null){
    console.log('no match was found')
}