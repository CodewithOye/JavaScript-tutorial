
let car = {
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

}

car.printDescription();
console.log(car.year);



//console.log(car['year']);
//console.log(car[2]);

/*
var anotherCar = {};
anotherCar.make = 'Benz';
console.log(anotherCar.make);
*/
/*
var x = {
    myProperty: {
        b: 'hi'
    }
};

console.log(x.myProperty.b);

*/

/*

var b = {
    myProperty: [
        {d:'this'},
        {e:'You'},
        {f:'get'},
        {g:'make'}
    ]
};
*/



let carLot = [

    {year:2017,make:'Toyota',model:'4runner'},
    {year:2015,make:'bmw',model:'440i'},
    {year:1992,make:'benz',model:'c43'},
    {year:2017,make:'Toyota',model:'Gr86'}

];


let contacts = {
    customers:[
        {name:"John",lastName:'Make',phone:["+1-111-111-1111",'(232)-464-3645']},
        {name:"Bob",lastName:'Sue',phone:["+1-222-222-2222",'(232)-464-3645']},
        {name:"John",lastName:'Carr',phone:["+1-444-333-1111",'(232)-464-3645']}
    ],
    employees: [
        {firstName:"Jane", lastName:'Doe', phone:['+1-111-111-111']},
        {firstName:"Mary", lastName:'Smith', phone:['+1-222-222-2222']},
        {firstName:"Robert", lastName:'Johnson', phone:['+1-333-333-333']},
    ]
};
