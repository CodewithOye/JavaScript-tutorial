function sayHello(name){
    return function() {
        console.log("howdy " + name)
    }
}
let jonny = sayHello("John"); // howdy John,

jonny();                     // howdy John!