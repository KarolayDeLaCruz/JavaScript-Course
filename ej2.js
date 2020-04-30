 /* Cadenas */

 var nombre= "Hola";
 var cadena= nombre+"mundo";

 console.log(cadena) //impirme cadena
 console.log(cadena.length) //impirme longitud cadena


 if (nombre.indexOf("Karo") != -1) {
     console.log("Es Karo");
 }
 else{
     console.log('No eres Karo');
 }

 console.log(nombre.charAt(1))

 nombre=nombre.replace("H","j")

 console.log(nombre.charAt(1))

 console.log(nombre.slice(0,2))


 console.log(nombre.toUpperCase())