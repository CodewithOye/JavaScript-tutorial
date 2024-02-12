let names = ['Elon' , 'Mark' , 'Jona' , 'Micheal']
let others = ['Sammie' , 'Jessica' , 'Doe' , 'John']

let lost = [2,4,6,8,14,15,16,13,12]
let fibonacce = [1,2,3,4,5,6,7,8,12,13,15,16,19,66,55,34]

var combine = lost.concat(fibonacce)  //concatenates the arrays into one array
console.log(combine);
console.log(fibonacce.join('-'));   //joins all elements of an array with a specific character

console.log(lost.shift());    //removes the first element from the array and returns it
   console.log(lost)                           //also shifts all other elements down by one position

//adds new items to the beginning of the array
console.log(lost.unshift("I am at index zero"));
console.log(lost);

console.log(names)
console.log(names.reverse())      //reverses the order of the elements in the array
console.log(names.sort())

console.log(others[0])             //accessing single item in the array using its index number

console.log(others.indexOf('Jessica'))     //returns the first occurrence of a specified value (in this case Jessica)
console.log(others.indexOf('Jessica'))     //returns the first occurrence of a specified value (in this case Jessica)
console.log(others.indexOf('Jessa'))     //returns the first occurrence of a specified value (here Jessa is found at index 1) 
console.log(combine.lastIndexOf(1))    

var filtered = combine.filter((item)=>{return item > 10})       //returns only those elements that satisfy the  console.log(combine.indexOf(13));        //returns the first occurrence of the                            //returns the last occurrence of an object within the entire array
//check if an array contains an item or not
if (combine.includes(15)){
    console.log("Yes, 15 is in the array")
} else {
    console.log("No, 15 is not in the array")
}

names.forEach((name) => {console.log(`Hello ${name}`)})

console.log(filtered.every((num) => num < 10 ))
console.log(filtered.every((num) => num < 16 ))

console.log(fibonacce.some((num) => num > 50));
console.log(fibonacce.some((num) => num > 100));

