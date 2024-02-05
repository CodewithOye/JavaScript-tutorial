let counter = (function () {
    let count = 0;

    function print(message){
        console.log(`${message} => ${count}`);
    }
    function getCount(){
        return count;
    }
    function setCount(value){
        count = value;
    }
    function incrementCount(){
        count += 1;
        print("After incremement: ");
    }
    function resetCount(){
        print("Before reset: ");
        count = 0;
        print("After reset: ");
    }

    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    };

})();
console.log(counter)
console.log(typeof counter)