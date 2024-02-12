let a = 7 * undefined / 'panama';
console.log(a)

function beforeTryCatch(){
    let obj = undefined;
    console.log(obj.b)
    console.log('If the previous line of code throws an exception, you will never see this.')
}

//beforeTryCatch()

function afterTryCatch(){
    try {
        let obj = undefined;
        console.log(obj.b)
        console.log('If the previous line of code throws an exception, you will never see this.')
        
    } catch (error) {
        console.log('I Caught an exemption that was thrown by JavaScriptb' + error.message);
    }finally{
        console.log('This will happen no matter what')
    }
    console.log("My Application is still running!")
}
afterTryCatch()


function performCalculation(obj){
    if(obj.hasOwnProperty('b')== false){
        throw new Error(' I am your new Error ')
    }
    return 6
}

function performHigherLevelOperation(){
    let obj ={};
    let value =0;
    try {
        value = performCalculation(obj);
    } catch (error) {
        console.log(error.message)
    }
    if(value == 0){
        //contingency
        // retry logic

    }

}
 performHigherLevelOperation();
// function performHigherLevelOperation(){
//      var result = performCalculation({b:10})
//      console.log('The Result of the Calculation is :'+result)
// }