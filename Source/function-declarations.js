/* function sayHello(){
   console.log('Hello!')
}

sayHello()

let a = sayHello;
a();
*/

/*function sayHello(name){
  console.log('=================')
  console.log('Hello ' + name + '!')
  console.log('=================')
}

sayHello('Micha')
sayHello('Emma')
sayHello('Banks')*/

function calculateTax(amount){
    let result = amount * 0.15;
    return result;
}
let tax = calculateTax(100);
console.log(tax);