// cada elemento perteneciente al array seria undefined debido a la ausencia de valor en javascript
//los arreglos no tienen tipo por lo cual se puede ingresar cualquier tipo de dato int, str, bool
var arreglo1= [20,10,5];

//console.log(arreglo1[2]);

//console.log(arreglo1.length);


//----- push y unshift

//arreglo1.push('k')
//console.log(arreglo1);

//arreglo1.unshift('a')
//console.log(arreglo1);




//------ shift y pop
//arreglo1.shift()
//console.log(arreglo1);

//arreglo1.pop()
//console.log(arreglo1);

//---- iteracion
var arreglo=[5,10,15];

//for(var i=0;i<arreglo.length;i++){
//  console.log(arreglo[i]);
//}

var i=arreglo.length;
for(;i>=0;i--){
  console.log(arreglo[i]);
}