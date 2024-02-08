let car = {
    make:"BMW",
    model:"330i",
    year:2020,
};

let newCar = Object.create(car)

console.log(newCar.make)
newCar.make ='Benz'
console.log(newCar.make)
console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);
car.doors = 4;
console.log(newCar.doors)

console.log(car.hasOwnProperty('doors')) // true 
console.log(newCar.hasOwnProperty('doors')) // false

