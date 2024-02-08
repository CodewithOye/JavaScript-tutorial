let motor = {
    make: 'BMW',
    model: "745li",
    year: 2010
};

// Accessing properties of an object using dot notation.
console.log(motor.make); // Outputs: BMW

// Adding a new property to the object.
motor.color = 'Red';

// Using bracket notation to access and add new properties.
console.log(motor['model']); // Outputs: 745li
motor['mileage'] = 50;

// class constructor
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// function class constructor

// function Car(make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

function MyFunction(){
    console.log("I am a simple constructor function")
}
// You cant do anything with this particular object ... its certainly Not a function reference anymore!
var myFunction = new MyFunction();
console.log(typeof myFunction)

let myCar2 = new Car("Audi", "TTRS", 2019);
console.log(myCar2)

let myCar = new Car(motor.make, motor.model, motor.year);
console.log(myCar.make +" "+ myCar.model +" ("+ myCar.year +")"); // Outputs: BMW 745li (2