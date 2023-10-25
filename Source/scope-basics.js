let a = 'first';

function scopeText(){
    console.log(a);
    a = 'changed'
    if(a != ''){
        console.log(a);
        console.log('Inside If: ' + b);
        let c = 'third';
    }


   // let b = 'second';
   //console.log(c);

}
scopeText()
console.log(a);