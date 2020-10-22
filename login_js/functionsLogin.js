$(document).ready(function(){

    
    verificarCampos ();
    verificarUsuario();
    autenticaUsuario();

});

function verificarCampos (){

    $("#botaoEntrar").click(function(){
        
        if(($("#inpEmail").val() == "") || ($("#inpSenha").val() == "")){
            alert("Preencha o campo!");
        }


       
    });

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
    }else {
        $("#inpNome").removeClass("erro");
        $("#inpEmail").removeClass("erro");  
        $("#inpSenha1").removeClass("erro");
        $("#inpSenha2").removeClass("erro");

    }
});
}

dados = [];
aux = [];

function verificarUsuario(){
    $("#botaoSalvar").click(function(){    

        cont = 0;

        if (cont == 0){

            
            aux.push($("#inpNome").val());
            aux.push($("#inpEmail").val());
            aux.push($("#inpSenha1").val());
            aux.push($("#inpSenha2").val());

            dados.push(aux);
            console.log(dados);


            Storage = window.localStorage;
            Storage.setItem("dados", JSON.stringify(dados));
            var dadosDoStorage = JSON.parse(Storage.getItem('dados'));

            console.log(dadosDoStorage);

        }else {

        aux = [];

        aux.push($("#inpNome").val());
        aux.push($("#inpEmail").val());
        aux.push($("#inpSenha1").val());
        aux.push($("#inpSenha2").val());

        dados.push(aux);
        console.log(dados);


        Storage = window.localStorage;
        Storage.setItem("dados", JSON.stringify(dados));

        var dadosDoStorage = JSON.parse(Storage.getItem('dados'));

        console.log(dadosDoStorage);

        }

        cont ++;

        console.log(cont);
    });

}


function autenticaUsuario(){

    usuariovalido = false;

    Storage = window.localStorage;
    var dadosDoStorage = JSON.parse(Storage.getItem('dados'));

    $("#botaoEntrar").click(function(){

        if(($("#inpEmail").val() == dadosDoStorage[0][1]) && ($("#inpSenha").val() == dadosDoStorage[0][2])){
            alert("Usuario valido");
            $("#inpEmail").removeClass("erro");
            $("#inpSenha").removeClass("erro");
            usuariovalido = true;


        }else {
            $("#inpEmail").addClass("erro");
            $("#inpSenha").addClass("erro");

            alert("Usuario invalido..");
            usuariovalido = false;

        }

        if (usuariovalido){
            alert("Acessando pagina principal...")
        }

    });

}