


(function(){
    let h1 = document.getElementById('h1')
    function handler(name){
        h1.innerHTML = `Hello, ${name}!`
    }
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        handler('Bob')
    })
})();