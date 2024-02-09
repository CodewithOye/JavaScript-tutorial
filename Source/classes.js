// declaration 


class Car {
    constructor(make,model,year,color){
        this.make = make;
        this.year = year;
        this.model= model;
        this.color = color; 
    }
    print() {
        console.log(`This car is a ${this.make} ${this.model} (${this.year}) ${this.color} Color`);
    }
    
}

let myCar = new Car("Audi", "A8","2019", "Red");
myCar.print();
console.log(myCar);
// console.log(Car)


class SportsCar extends Car{

}

let mySportsCar = new SportsCar("BMW", "Z4 M40i","2024","Green");
mySportsCar.print();