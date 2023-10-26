// DONT DO THIS

//var myVariables = 'I am at the global scope';

/*var myFunction = function(){
    console.log('Me too!');
}*/


function one(){
    return 'one';
}

// let value = one()
// console.log(value)

//console.log(one())

function two(){
    return function(){
        console.log('two')
        }
}

let myFunction = two();
myFunction();

 function three(){
    return function(){
        return 'three';
        }
 }

 console.log(three())