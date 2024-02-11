let today = new Date();

console.log(today) // shows the date

let person = new Date('December 7, 1990 07:01:23'); // date with an arguments

console.log(person)

var elapsedTime = today - person; // returns time difference between two dates in milliseconds
console.log(elapsedTime)

// converting milliseconds to seconds and then minutes
var seconds = Math.floor(elapsedTime / 1000);
var minutes = Math.floor(seconds / 60);
if (isNaN(minutes)) {
    console.log("Not a valid age");
} else {
    console.log(`${minutes} Minutes`);
}

// getMonth()
// getHours()
// getMinutes()
// getSeconds()
// getDay()
// getMilliseconds()

console.log(today.getMilliseconds())