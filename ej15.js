/* Metodo forEach ES5 parecido a map pero
no retorna un arreglo nuevo construido solo itera los elementos del arreglo
var numeros=[2,5,9,7,5,3];

//Para ver cada elemento, posicion y el arreglo total
numeros.forEach(function(elemento, index, arreglo){
   console.log(elemento);
   console.log(index);

   console.log(arreglo);
})
*/



/*  pow con forEach
var numeros=[2,5,9,7,5,3];

numeros.forEach(function(elemento, index, arreglo){
   arreglo[index]=Math.pow(elemento,2);
})

console.log(numeros)

*/