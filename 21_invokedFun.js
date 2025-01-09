// Immediately Invoked Function Expressions (IIFE)
// It is used to get relief from polution from Global Scope
// Syntax :  (function(){})()
// Should be ends with ";"

(function chai(){     // Named IIFE
    console.log("DB Connected")
})
();

(() => {              // Simple IIFE
    console.log("DB Connected 2")
})();

((name) => {
    console.log(`my name is ${name}`)
})("Mnthn Shingala");