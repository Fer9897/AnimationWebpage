$(document).ready(function(){

    var form = $("#forma"),
    nombre = $("#nombre"),
    ciudad = $("#estadoCD"),
    telefono = $("#telefono"),
    correo = $("#correo"),
    descripcion = $("#descripcion"),
    info = $("#feedback"),
    enviar = $("#enviarForm");


    $("#cotDialogo").hide();

    $("#cotizacion").click(function () {
        $("#cotDialogo").show();
    });

    $("#closeIcon").click(function () {
       $("#cotDialogo").hide(); 
    });

    enviar.on('click', function (e) {
    e.preventDefault();
    if (validate()) {
    $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json"
    }).done(function(data) {
        if (data.success){
            correo.val('');
            nombre.val('');
            ciudad.val('');
            telefono.val('');
            descripcion.val('');
            info.html("Mensaje enviado").css("color", "green").slideDown();
        }
        else{
            info.html("No se puede enviar la solicitud").css("color", "red").slideDown();
        }
    });
    }
    });

    function validate () {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(correo.val())) {
        correo.css("border-color", "red");
        valid = false;
    }

    if ($.trim(nombre.val()) === "") {
        nombre.css("border-color", "red");
        valid = false;
    }

    if ($.trim(ciudad.val()) === "") {
        ciudad.css("border-color", "red");
        valid = false;
    }

    if ($.trim(telefono.val()) === "") {
        telefono.css("border-color", "red");
        valid = false;
    }

    if ($.trim(descripcion.val()) === "") {
        descripcion.css("border-color", "red");
        valid = false;
    }

    return valid;
    }
});