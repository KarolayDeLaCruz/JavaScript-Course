//Template string:
/*
var template=`Hola mundo`;

console.log(template);


var template=`Hola
  hdhd
mundo`;

console.log(template);


var nombre="Karo";
var saludo=c ${nombre} buen dia` ;

console.log(saludo);
*/


//taget templates
function tagged(cadenas,valores){
  console.log(cadenas);
  console.log(valores);

}

var nombre="karo"
tagged`Hola ${"mucho"+"gusto"} buen dia,${nombre}`;