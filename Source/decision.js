// if statement 
/*
var count = 4;
if(count === 6){
  console.log('Count is 6')
}else if(count > 6){
  console.log('Count is greater than 6')
}else if(count < 9){
  console.log('Count is lesser than 9')
}else{
  console.log('Count is NOT 4')
}
*/
// switch statement 
/*
let hero = '';
switch(hero.toLocaleLowerCase()){
  case 'superman':
    console.log('Super strength');
    console.log('x-ray vision');
    break;
  case 'batman':
    console.log('intelligence ');
    console.log('fighting skills ');
    break;
  default:
    console.log('Member of JLA')
}*/

// ternary operator 

let a = 1;
let b = '1';
//let result = (a === b) ? 'equal' : 'inequal';
//let result = (a == b) ? 'equal' : 'inequal';
let result = (a != b) ? 'Not equal' : 'Not inequal';


console.log(result);