$(document).ready(function(){
    
    $("#btnAjax").click(function(evento){
        evento.preventDefault();
        $("#contentAjax").load("ajax.html");

    });
});