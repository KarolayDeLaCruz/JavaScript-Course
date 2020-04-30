var maximo=10;
var minimo=1;
var numero_secreto=Math.random()*(maximo-minimo)+minimo;

numero_secreto=parseInt(numero_secreto);


var mensaje="Ingresa un numero para adivinar el numero magico"

while(true){
    var numero_del_usuario=prompt(mensaje,"0");

    numero_del_usuario=parseInt(numero_del_usuario);

    if(numero_del_usuario===numero_secreto){
        alert("Felicitaciones. Ganaste el juego");
        break;
    }
    else if(numero_del_usuario===0){
        break;
    }
    else if(numero_del_usuario<numero_secreto){
        mensaje=("Lo sentimos, el numero que ingresaste es menor al numero secreto");
    }
    else if(numero_del_usuario>numero_secreto){
        mensaje=("Lo sentimos, el numero que ingresaste es mayor al numero secreto");
    }

}
