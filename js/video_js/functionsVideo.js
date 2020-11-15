$(document).ready(function(){

    $.get( "../paginas/Sobre.html", function( data ) {
        // alert( data );
        $(".divCorpo").after(data);
    });

    $( "#divCorpo" ).load( "../paginas/Sobre.html" );





})