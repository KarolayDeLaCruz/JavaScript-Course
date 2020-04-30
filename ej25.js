/* Arrow functions*/


/*
var numeros = [1, 2, 3, 4, 5];

// elevado a 2
var elevando_2 = numeros.map(function(n) {return n * n;});

// elevado a 2 con arrow functions
var elevando_2 = numeros.map((n)=>{ return n * n; });

console.log(elevando_2);

*/

function Tutor() {
    this.nombre = "Karo";

    setTimeout(() => {
        this.nombre = "Hola";
    }, 500);
}

var tutor = new Tutor();

console.log(tutor.nombre);

setTimeout(function() {
    console.log(tutor.nombre);
}, 1000);