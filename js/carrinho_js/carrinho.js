
var bancoDadosCarrinho = window.localStorage;

 $(document).ready(function(){
    mostrarCarrinho();






 });

 function mostrarCarrinho(){
    $("#tabelaCarrinho").html("");
    
    var arrayCarrinho = JSON.parse(bancoDadosCarrinho.getItem("dadosCarrinho"));

    $("#tabelaCarrinho").html("");
    var soma = 0;
    for (var i = 0; i < arrayCarrinho.length; i++){

        var conteudo = "";

         conteudo += '<div class="divListaCarrinho">';
         conteudo += '<hr/><hr/>';
         conteudo += '<div class="divImagemCarrinho">';
         conteudo += '<img src="../img/catalogo_img/'+ arrayCarrinho[i][1] +  '">';
         conteudo += '</div>';
         conteudo += '<div class="divJogosCarrinho">';
         conteudo += '<h3>' + arrayCarrinho[i][0] + '</h3>';
         conteudo += '</div>';
         conteudo += '<div class="divPreco" >';
         conteudo += '</div>';
         conteudo += '<div class="divQtd" >';
         conteudo += '<input  autocomplete="off" data-quantity="input" class="divQtd1" type="tel" id="bQtd" value= "' +  arrayCarrinho[i][5]  +'" readonly="readonly"> ';
         conteudo += '</div>';
         conteudo += '<div class="divTotal" >';
         conteudo += '<input class="divTotal1" type="text" id="btotal" value = "R$ ' +  arrayCarrinho[i][2]  +'"readonly="readonly"> ';
         conteudo += '</div>';
         conteudo += '</div>';

        $("#tabelaCarrinho").append(conteudo)
         soma +=  arrayCarrinho[i][2];
          
     }
     $("#valorTotal").val(soma);        
     
     
 }

