/*devuelve arreglo de los elementos
var div=document.getElementsByClassName("mi_clase")
console.log(div)*/


/*devuelve los elementos que comparten la misma etiqueta
var div=document.getElementsByTagName("p")
console.log(div)*/

/*devuelve los elementos que comparten la misma etiqueta
var div=document.getElementsByTagName("p")
console.log(div)*/

/*devuelve unicamente el primer elemento de la clase
var mi_clase=document.querySelector(".mi_clase");
console.log(mi_clase);*/

/*devuelve unicamente todos los elementos de la clase
var mi_clase=document.querySelectorAll(".mi_clase");
console.log(mi_clase);*/

//Implementar propio jquery  $-> es busqueda de jquery
function $(selector) {
    return document.querySelector(selector );
}
var mi_clase=$(".mi_clase");
console.log(mi_clase);