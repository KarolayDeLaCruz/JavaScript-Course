/*  Elevar al cuadrado los numeros

var numeros=[2,3,4,5]
var cuadrados=[]


for(var i=numeros.length-1 ; i>=0 ;i--){
  var numero=numeros[i];
  cuadrados.push(Math.pow(numero,2))
}

console.log(cuadrados)
*/


/*  Map */

var numeros=[2,3,4,5]


var cuadrados=numeros.map(
function(elemento){
  return elemento*elemento;
}
)

console.log(cuadrados)