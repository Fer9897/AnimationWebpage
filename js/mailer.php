<?php

if($_POST) {
    $to = "contacto@animationstudio.com.mx";
    $correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);
    $nombre = filter_var($_POST["nombre"], FILTER_SANITIZE_STRING);
    $ciudad = filter_var($_POST["ciudad"], FILTER_SANITIZE_STRING);
    $telefono = filter_var($_POST["telefono"], FILTER_SANITIZE_STRING);
    $descripcion = filter_var($_POST["descripcion"], FILTER_SANITIZE_STRING);
    $body = "Mensaje: $descripcion\nCorreo: $correo";
    $subject="Cotización";

    if(@mail($to, $subject, $body)){
        $output = json_encode(array('success' => true));
        die($output);
    }
    else{
        $output = json_encode(array('success' => false));
        die($output);
    }
}
?>