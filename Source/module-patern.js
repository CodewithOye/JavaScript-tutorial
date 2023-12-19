var counter = (function() {


    
let count = 0 ;
function print(message){
    console.log(message + '---' + count )
}

    //return object for property that have values


    return {
        // value: count,

        get: function() {
            return count;
        },


        set: function(value){
            count = value;
        },



        increment: function (){
            count += 1;
            print('After Increment: ')
        },
        reset: function(){
            print('Before reset: ');
            count = 0;
            print('After reset: ')

        }
    }

})()

counter.increment()
counter.increment()
counter.increment()
counter.increment()

// accidentally created a closure 
// console.log(counter.value)
// console.log(counter.count)


counter.set(7)
console.log(counter.get())

counter.get(3)



counter.reset();