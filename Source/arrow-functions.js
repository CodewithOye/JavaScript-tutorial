// Arrow function is a shorthand of a normal function

let hi = () => {
    //  ^^^^ keyword.operator.js
    console.log("Hello, World!");
};
//  <- meta.function-call punctuation.definition.arguments_list.begin.js
//       ^^^^^^^^^^^^^^^^^ string.quoted.double.js
console.log(hi());
//             ^^^ meta.group.braces.round.js

const obj = {  
    foo: "bar",
    baz() { return this.foo; },
    qux: function() { return this.baz(); }
 }

 console.log(obj)


 let hello = (name) => {
    console.log(`Hello ${name}!`) ;
 }

 hello("bob"); // this is a void functions  call with an argument of "bob"
              //                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ variable.parameter.function.js

let add = (a,b) => {
    return a + b
};
console.log(add(10,47));
//            ^^^^^^^ constant.numeric.decimal.js
//                ^^^^^ constant.numeric.decimal.js

// let names = ['David', 'Eddie', 'Alex', 'Micheal'];
// names[2] = 'Jessica'; // this removed Alex and add Jessica
// names.map((name) => {
//     console.log(`How are you ${name}`)
// })
// console.log(names);

// with while loops
// let pupils = ['David', 'Eddie', 'Alex', 'Micheal'];
// pupils[2] = 'Jessica'; // this removed Alex and add Jessica
// let i = 0;
// while (i < pupils.length) {
//     i++;
//     console.log(`How are you ${pupils}? ${i}`);
   
// }
let names = ['John', 'Mark', 'Elon', 'Musk'];
names[4] = 'Jessica'; // this removed Alex and add Jessica
let n = 0;
names.map((name) => {
   n++; 
   console.log(`How are you ${name} ${n}!`);
})
console.log(names);

let pupils = ['David', 'Eddie', 'Alex', 'Micheal'];
var tranformed = pupils.map((pupil) => {
    return (`How are you  ${pupil} ?`);
})

console.log(tranformed);