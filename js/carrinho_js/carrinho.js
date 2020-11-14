
var bancoDadosCarrinho = window.localStorage;
var somaTotal = 0;

 $(document).ready(function(){
    mostrarCarrinho();
    finalizarCOmpra();
    excluirCarrinho();

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
         conteudo += '<input  autocomplete="off" data-quantity="input" class="divQtd1" type="tel" id="bQtd" value= "1" readonly="readonly"> ';
         conteudo += '</div>';
         conteudo += '<div class="divTotal" >';
         conteudo += '<input class="divTotal1" type="text" id="btotal" value = "R$ ' +  arrayCarrinho[i][2]  +'"readonly="readonly"> ';
         conteudo += '</div>';
         conteudo += '</div>';

        $("#tabelaCarrinho").append(conteudo)

        soma +=  arrayCarrinho[i][2];
        $("#totalProdutos").val(soma.toFixed(2));          
        $("#totalCompra").val(soma.toFixed(2));
        $("#valorTotal").val(soma.toFixed(2));        
        
        
        $("#parcela1").val(soma.toFixed(2)); 
     }
    somaTotal = soma;      
     
     
 }


function finalizarCOmpra(){
    $("#bCCredito").click(function(){
        $("#tipopgto").val("Cartão de Crédito"); 
        
        $(".detalhesPgto").html("");
        var conteudo = "";
        var parcela1 = (somaTotal/1).toFixed(2);
        var parcela2 = (somaTotal/2).toFixed(2);
        var parcela3 = (somaTotal/3).toFixed(2);

        conteudo += '<table align="center">';
        conteudo += '<tr ><td colspan="2"><input  class="formul" type="number" placeholder="Número do Cartão"></td></tr>';
        conteudo += '<tr><td colspan="2"><input  class="formul" type="text" placeholder="Nome no Cartão"></td></tr>';
        conteudo += '<tr><td colspan="2"><input  class="formul" type="text" placeholder="CPF do Títular do Cartão"></td></tr>';
        conteudo += '<tr><td><input  class="formul3" type="text" placeholder="Mês Validade"></td>';
        conteudo += '<td><input  class="formul3" type="text" placeholder="Ano"></td></tr>';
        conteudo += '<tr><td><input  class="formul3" type="text" placeholder="CVV"></td>';
        conteudo += '<td> <select class="formul3 parcelamento" name="select">';
        conteudo += '<option value="" >Parcelamento</option> ';
        conteudo += '<option id="parcela1" value="" > 1 X R$ ' + parcela1 +' </option> ';
        conteudo += '<option id="parcela2" value=""> 2 X R$ ' + parcela2 +' </option> ';
        conteudo += '<option id="parcela3" value=""> 3 X R$ ' + parcela3 +'</option>';
        conteudo += '</table>'; 
         
         $(".detalhesPgto").append(conteudo)
        
     }
    );

    $("#bBoleto").click(function(){
        $("#tipopgto").val("Boleto"); 
 
        $(".detalhesPgto").html("");
        var conteudo = "";


        conteudo += '<h4> <b>Tudo o que você precisa saber sobre o pagamento no boleto</b></h4>';
        conteudo += '<p><hr></p>';
        conteudo += '<p>Imprima o boleto e pague em qualquer agência bancária até a data do vencimento;</p>';
        conteudo += '<p>Você terá 2 dias úteis para pagamento do boleto;</p>';
        conteudo += '<p>Após o vencimento, seu pedido será automaticamente cancelado.</p>';

         $(".detalhesPgto").append(conteudo)
        
     }
    );

    $("#BFinalizarCompra").click(function(){
        alert("Pedido Realizado com Sucesso!!!");
    }
        );
}

function excluirCarrinho(){
    
    var arrayCarrinho = JSON.parse(bancoDadosCarrinho.getItem("dadosCarrinho"));
    
    $(".detelarCarrinho").click(function(){
        alert("roi")
        
        localStorage.removeItem("dadosCarrinho");
        

    });

}