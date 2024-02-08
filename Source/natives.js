let myString = new String("Howdy");
console.log(myString) // [String: "Howdy"]
// The `length` property returns the length of a string in characters (not bytes). 
console.log(myString.length); // Outputs: 5
console.log(typeof myString)  // Object
console.log(myString.toString()) // Howdy

// String()
// Number()
// Boolean()
//Object()
//Function()
// Symbol()


// Array()
//RegExp()

// Date()

// Error()

let myPrimitive = "This is crazy";
myPrimitive = myPrimitive.toLocaleUpperCase();
console.log(myPrimitive)
console.log(typeof myPrimitive)


let myNumber = new Number(10);
console.log(typeof myNumber)
console.log(myNumber.valueOf())

 myPrimitive = myNumber.valueOf();
 console.log(myPrimitive)