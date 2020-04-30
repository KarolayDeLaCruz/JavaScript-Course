//-- clases-->
class Human {

}
//HEREDA CLASE HUMAN
class Tutor extends Human{
    constructor(nombre, last_name) {
        super();
        this.nombre = nombre;
        this.last_name = last_name;
    }
    //METODO
    full_name() {
        return this.nombre + " " + this.last_name;
    }
}

var tutor = new Tutor("Karo", "DLC");

console.log(tutor.full_name());