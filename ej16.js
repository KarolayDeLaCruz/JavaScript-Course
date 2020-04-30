/* metodo Reduce  */



/*unir elementos de un arreglo
var letras=["k","a","r","o"]

var palabra=letras.reduce(
  function(valor_anterior_retornado,valor_actual,index,arreglo)
  {
   return valor_anterior_retornado+valor_actual;
});

console.log(palabra)
*/


/*sumar elementos de un arreglo
var letras=[1,2,3,4];

var suma=letras.reduce(
  function(valor_anterior_retornado,valor_actual,index,arreglo)
  {
   return valor_anterior_retornado+valor_actual;
},5);

console.log(suma)
*/




/*sumar elementos de un arreglo con un valor inicial de 5*/
var letras=[1,2,3,4];

var suma=letras.reduce(
  function(valor_anterior_retornado,valor_actual,index,arreglo)
  {
   return valor_anterior_retornado+valor_actual;
},5);

console.log(suma)