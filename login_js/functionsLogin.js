$(document).ready(function(){

    $("#botao").click(function(){
        
        if(($("#inpEmail").val() == "") || ($("#inpSenha").val() == "")){
            alert("Preencha o campo!");
        }else {
            alert("Campos preenchidos...");
        }


    });


});