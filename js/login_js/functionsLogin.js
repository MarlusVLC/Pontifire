$(document).ready(function(){

    
    verificarCampos();
    verificarUsuario();
    autenticaUsuario();

});

function verificarCampos (){

    $("#botaoEntrar").click(function(){
        if(($("#inpEmail").val() == "") || ($("#inpSenha").val() == "")){
            alert("Preencha os campos!");
            $("#inpSenha").addClass("erro");
            $("#inpEmail").addClass("erro");
        }
    });
}

function verificarUsuario(){

    $("#botaoSalvar").click(function(){    

        if(($("#inpSenha1").val() != $("#inpSenha2").val())) {
            alert("As senhas devem ser identicas...");
            $("#inpSenha1").addClass("erro");
            $("#inpSenha2").addClass("erro");
    
        }else if(($("#inpNome").val() == "" ) || ($("#inpEmail").val() == "") || ($("#inpSenha1").val == "") || ($("#inpSenha2").val == "") ){
            alert("Preencha todos os campos....");
            $("#inpNome").addClass("erro");
            $("#inpEmail").addClass("erro");  
            $("#inpSenha1").addClass("erro");
            $("#inpSenha2").addClass("erro");

        }else if(($("#inpNome").val() != "" ) && ($("#inpEmail").val() != "") && ($("#inpSenha1").val != "") && ($("#inpSenha2").val != "") && ($("#inpSenha1").val == ($("#inpSenha2").val))){
            
            dados = [];
            aux = [];
            
            aux.push($("#inpNome").val());
            aux.push($("#inpEmail").val());
            aux.push($("#inpSenha1").val());
            aux.push($("#inpSenha2").val());

            console.log(dados);

            var dadosDoStorage = JSON.parse(Storage.getItem('dados'));

            console.log(aux);

            if (dadosDoStorage == null){
                dados.push(aux);
                Storage.setItem("dados", JSON.stringify(dados));
            }else {
                dadosDoStorage.push(aux);
                Storage.setItem("dados", JSON.stringify(dadosDoStorage));
            }

            
            $("#inpNome").removeClass("erro");
            $("#inpEmail").removeClass("erro");  
            $("#inpSenha1").removeClass("erro");
            $("#inpSenha2").removeClass("erro");

            alert("User adicionado com sucesso...");

        }
    });

}

function autenticaUsuario(){

    Storage = window.localStorage;
    var dadosDoStorage = JSON.parse(Storage.getItem('dados'));

    var validaLogin = [];
    var validaLoginStorage = window.localStorage;

    $("#botaoEntrar").click(function(){

        var i = 0;
        usuarioValido = false;

        while (usuarioValido == false) {

            if(dadosDoStorage != undefined){
                if(($("#inpEmail").val() == dadosDoStorage[i][1]) && ($("#inpSenha").val() == dadosDoStorage[i][2])){
                    $("#inpSenha").removeClass("erro");
                    $("#inpEmail").removeClass("erro");
                    window.location.href = "../index.html";

                    if (($("#inpEmail").val()) != validaLogin[0]){
                        validaLogin.push($("#inpEmail").val());
                        validaLogin.push(i);
                        validaLoginStorage.setItem("userLogado",JSON.stringify(validaLogin));
                    }
                    usuarioValido = true;
                }
            }else {
                usuarioValido = true;
                alert("USUARIO OU SENHA INVALIDO...");
                $("#inpSenha").addClass("erro");
                $("#inpEmail").addClass("erro");
            }
            i++;
        }

    });

}