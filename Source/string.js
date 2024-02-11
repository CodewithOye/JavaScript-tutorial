let first = 'Knowledge is power but enthusiasm pulls the switch.';
let second = 'Do  not just seek to have a friend, seek to be one.';
let third = '4,5,3,4,5,3,2,3,4';


//  You can call this method on string literals


console.log(first.toUpperCase()); // to uppercase

let myEndsWith = second.endsWith("one.","."); // returns true if it ends with "one." and ";"

console.log(myEndsWith);

let indexOfDot = third.indexOf(".",0) ; // Returns the position of the dot in the string starting from 0

console.log(`The character at position ${indexOfDot} is "${third[indexOfDot]}"`);

let myStartsWith = first.startsWith('Kn',1); // It checks whether the string starts with Kn or kn (case insens)
let includesComma = third.includes(","); // checks whether the string contains comma or not

console.log(`Does the string contain a comma? ${includesComma}`);

let sliceFromZeroToFour = first.slice(0,4); // slices the string from 0th element to 4th element (not including 4th element
let lastIndexOfNumber= third.lastIndexOf("5") // gives the last position where the number 5 occurs in the string
let lastIndexOfComma = third.lastIndexOf(","); // Returns the position of the last comma in the string

let sliceFromTo = third.slice(1,6); // Slices from  1 to 6 (not including 6). It starts counting from 0

console.log(sliceFromTo);

let splitByComma = third.split(","); // splits by comma

console.log(splitByComma);

let trimWhiteSpace = "    Hello World     ".trim(); // Removes white spaces from both sides

console.log(trimWhiteSpace);


let mySplit = third.split(',');

console.log(mySplit); // split by comma and return array of strings

let mySlice = first.slice(10, 15);

console.log(mySlice) // slice from index 10 till end of string

let mySubstring= first.substring(9,17);

console.log(mySubstring); // substring from index 9 till index 17

let startIndexOf = first.indexOf('Knowledge') ;

console.log("Start Index Of: "+startIndexOf); // returns the starting position of "Knowledge" in the string

let lastIndexOf = first.lastIndexOf('power');

console.log("Last Index Of :"+lastIndexOf); //returns the last position of "power" in the string

let trimMethod = '   Hello World!   '.trim();

console.log(trimMethod); //removes any leading or trailing whitespace

let charAt = first.charAt(6);

console.log(charAt); //return character at specified index (in this case it will print 'o')

let concatMethod = first.concat(' ',second,' ' ,third);

console.log(concatMethod); //concatenates two or more strings with space between them

let myRepeat = "Hiya! \n ".repeat(8); // back slash with n stands for new line \n
console.log(myRepeat)