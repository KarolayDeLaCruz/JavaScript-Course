
/* Keyword let
sirve para declarar variables
block scoping no function scoping como var
let solo afecta a lo que esta dentro del bloque y no afecta a lo de afuera, var si
*/



init();

function init() {

    var nombre = "EMI";
    if(true) {
        let nombre = "KARO";
    }
    console.log(nombre);
}
