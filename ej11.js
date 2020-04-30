//funciones son objetos: se les puede colocar atributos, otras funciones
function nombre_function(a,b){
  return a+b;
}

//var resultado=nombre_function(5,6);
//console.log(resultado);




var funcion_suma= nombre_function;

function funcion_ejecutar(funcion){
  return funcion(2,4);
}

console.log(funcion_ejecutar(funcion_suma))
