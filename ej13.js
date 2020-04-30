/*Filter: metodo que toma como parametro un callback o funcion
y contruye un nuevo arreglo a partir de aquellos elementos que al
ejecutar la funcion devuelve verdadero*/

/* Construir un nuevo arreglo de numeros pares
var numeros=[10,2,4,11,8];
var numeros_pares=[];

for(var i=numeros.length;i>=0;i--){
  var numero=numeros[i];
  if (numero%2==0){
    numeros_pares.push(numero)
  }
}

console.log(numeros_pares);
*/




/* Uso de filter: es un metodo del arreglo numeros
var numeros=[10,2,4,11,8];
var numeros_pares=numeros.filter(
  function(numero){
    return numero %2 ==0;
  }
)

console.log(numeros_pares)
*/