/*let car = {
    make:'bmw',
    model: '745li',
    year:2010,
    getPrice: function(){
        // perfom some calc
        return 5000;

    },
    printDescription: function(){
        console.log(this.make + " " + this.model);

    }

}*/


function first(){
    return this;
}

console.log(first() === globalThis);

// This is a Node's global object
//because thats where the first method was called 


function second(){
    'use strict';

    return this;
}

console.log(second() === globalThis)
console.log(second() === undefined)

let myObject = {
    value: " My Object"
}

// value is set on the global Object

globalThis.value = " Global Object";

function third(){
    return this.value;
}

console.log(third())

//controlling the third function 
console.log(third.call(myObject)) // this can take name  console.log(third.call(myObject,"Name"))
console.log(third.apply(myObject)) // this can take an array console.log(third.apply(myObject,["Name"]))


function fifth(){
    console.log(this.firstName + " "+ this.lastName);
}


let customer1 = {
    firstName: "Bob",
    lastName:  "Jones",
    print: fifth
}
let customer2 = {
    firstName: "Jane",
    lastName:  "Jones",
    print: fifth
}
let customer3 = {
    firstName: "love",
    lastName:  "Jones",
    print: fifth
}
customer1.print();
customer2.print();
customer3.print();
