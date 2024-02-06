let a,b,c,d,e,f;

let names = ['david',"Bezos","Jeff","Mark","Elon",'julia'];

// [ b,d,f,a,c,e] = names;  // destructuring the names Object
// console.log(a) // output : mark
// console.log(b) // output : David
// console.log(c) // output : Elon
// console.log(e) // output : julia
// console.log(f) // output: jeff
// console.log(d) // output : Bezos


let others;
[a, b, ...others] = names;
// console.log(`${a}, ${b}, ${others}`); // output : dav
 console.log(a)
 console.log(b)
 console.log(others[0])


 let car;
 (
   car =  {year, model,make,value} ={
       make:"BMW",
       model: "328i",
       year:1994,
       value: 5999
     }

 )

 if(car.make === "audi"){
    console.log("This is a BMW");
 }else{
    console.log("Not a BWM");
    
 }

 console.log(car)



 // to run the value outside world 


 let input = document.getElementById('input');
 let button = document.getElementById('button')

 let showCar;

(
    showCar = {
        make: "Audi",
        year: 2023,
        value: 40000,
        model: "S4"
    }
)

button.addEventListener("click", () => {
    if(input.value === showCar.make){
        document.write("The Car Make Is Correct!<br>");
        document.write(`Year: ${showCar.year} <br>`);
        document.write(`Value: $${showCar.value} <br>`);
        document.write(`Model: ${showCar.model}`);
        
    } else {
       alert("That's incorrect!"); 
    }
})
// you can connect your html with that or create element with javasScript and append it with body