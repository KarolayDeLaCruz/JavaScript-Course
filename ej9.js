/* Enlace de evento con funcion .js
function clic() {
    alert("Alerta");
}
*/



/* Enlace de evento con funcion .js mediante listeners
* tercer parametro= true es booling va de adentro hacia afuera: del boton al div
* false es capture va de afuera hacia adentro: del div al boton
* Revisar  ---*/

document.getElementById("btn1").addEventListener("click",clic,false);
document.getElementById("mi_div").addEventListener("click",another_clic,false);

function clic(){
    alert("Alerta con btn");
}

function another_clic(){
    alert("Alerta con div");
}