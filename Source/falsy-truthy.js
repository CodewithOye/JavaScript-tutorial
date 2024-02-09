if (false){

}else {
    console.log(falsy)
}
if (null){

}else {
    console.log('null is falsy')
}
if (undefined){

}else {
    console.log('falsy value: undefined');
}
if (0){

}else {
    console.log('falsy value: 0');
}
if (NaN){

}else {
    console.log('falsy value: NaN');
}
if (''){

}else {
    console.log('falsy value: empty string')
    
}
if (""){

}else {
    console.log('falsy value: empty string')
    
}

  // Truthy
  //let truthy = 'I am a truthy value';
  
  if (truthy){
      console.log(`Value of truthy variable: ${truthy}`);
  } else {
      console.log("Truthy value: ", truthy)
  }
  if (true){
      console.log(`Value of truthy variable: ${true}`);
  }
  
  if ([]){
      console.log('Value of Empty Array is truthy');
  } 
  if ({}){
      console.log('Value of Empty Object is truthy');
  } 
  if ('bob'){
      console.log('Value of non-empty string variable is truthy');
  }
  if (new RegExp()){
      console.log('a new instance of an object is truthy');
  }
  if (-10){
      console.log('a Negative intergers are truthy');
  }
  if (-1.23 || 1.23){
      console.log('Negative and positive floats are  truthy');
  }
  if (Infinity){
      console.log('positive infinity is   truthy');
  }
  if (-Infinity){
      console.log('negative infinity is   truthy');
  }
