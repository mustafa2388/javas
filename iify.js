
//NAME: IIFE (Immediately Invoked Function Expression)
(function chai() {
    console.log(`DB CONNECTED`)
})();

//Simple IIFE
((name) => {
    console.log(`DB CONNECTED two ${name}`)
})("Mustafa")