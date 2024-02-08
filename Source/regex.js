//let pattern = /xyz/;
// var result1 = "abc xyz def".match(pattern); // ["xyz", index: 4, input: "abc xyz def"]
//console.log("result1="+JSON.stringify(result1));
// if (result1) {
//     var strIndex = result1.index;
//     console.assert(strIndex == 4, 'Test 1 Failed');
// } else {
//     console.log('Test 1 Passed')
// }

// var result2 = "abc xyzdef".match(pattern); // null
//console.log("result2="+JSON.stringify(result2)+" length="+result2.length);
// if (!result2) {
//     console.log('Test 2 Passed')
// } else {
//     console.assert(false, 'Test 2 Failed');
// }


let pattern = /xyz/;
// console.log(pattern);
// console.log(typeof pattern);

let value = 'This is xyz a test';
//console.log(pattern.test(value));    // true
console.log(value.replace(pattern, "REPLACED"));   // This is replaced a test
// console.log(`Value to search for ${value}`);
console.log(value.match(pattern));
var match = value.match(pattern)
console.log(match.index);
