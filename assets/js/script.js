$(function() {




    //comando texto rosa 
    $('.textorosa').on('dblclick', function() {
        $(this).css({
            "color": "#ff0080"
        });
    });
    //oculta y reaparece cards 
    $('.ocultar').click(function() {

        $('.sectfotos').toggle();
    });
    // alerta para avisar que se envio el formulario
    enviarFormulario.onclick = function() {
        alert('El Formulario fue enviado correctamente...');
    };

});