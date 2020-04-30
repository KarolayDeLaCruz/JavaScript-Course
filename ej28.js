//DOM:ARBOL QUE REPRESENTA DOCUMENTO HTML
$("#btn").addEventListener("click", function() {
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Correo");
    //para mandar arreglo de datos al servidor agregar []
    input.setAttribute("name", "mails[]");
    //agregar input al formulario
    $("#form").appendChild(input);
});

//seleccionar elementos
function $(selector) {
    return document.querySelector(selector);
}