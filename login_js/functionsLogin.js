$(document).ready(function(){

    
    verificarCampos ();

});

function verificarCampos (){

    $("#botao").click(function(){
        
        if(($("#inpEmail").val() == "") || ($("#inpSenha").val() == "")){
            alert("Preencha o campo!");
        }


        if(($("#inpSenha1") != $("#inpSenha2")) || ($("#inpNome") == "" ) ||  ($("#inpEmail") == "")) {
            alert("As senhas devem ser identicas...");

        }


    });




}