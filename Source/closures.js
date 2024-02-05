function sayHello(name) {
    return  () => {
        console.log(`How are you ${name}`); 
    }
}
let jonny = sayHello("John"); 

jonny();                     //How are you John