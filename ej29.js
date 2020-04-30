bind_close();
$("#btn").addEventListener("click", function() {
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Correo");
    input.setAttribute("name", "mails[]");
    $("#form").appendChild(input);
    my_alert("Se agregó un nuevo campo.");
});

function bind_close() {
    var elements = document.querySelectorAll(".close");
    for (var i = elements.length - 1; i >= 0; i--) {
        var el = elements[i];
        el.addEventListener("click", function() {
            this.parentNode.style.display = "none";
        });
    }
}

function my_alert(msg) {
    //Todos los hijos de el objeto body
    console.log($("body").children);

    var div = document.createElement("div");
    div.setAttribute("class", "alert");
    div.innerHTML = msg;

    var close = document.createElement("span");
    close.style.float = "right";
    close.innerHTML = "X";
    close.setAttribute("class", "close");

    div.appendChild(close);

    $("body").insertBefore(div, $("body").firstChild);
    bind_close();
}



function $(selector) {
    return document.querySelector(selector);
}