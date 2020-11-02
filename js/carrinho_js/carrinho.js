
var bancoDadosCarrinho = window.localStorage;

 $(document).ready(function(){
    mostrarCarrinho();
    total();





 });

 function mostrarCarrinho(){
    $("#tabelaCarrinho").html("");
    
    var arrayCarrinho = JSON.parse(bancoDadosCarrinho.getItem("dadosCarrinho"));

    $("#tabelaCarrinho").html("");

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
         conteudo += '<input class="divPreco1" type="text" id="bPreco" readonly="readonly" value = "R$ ' +  arrayCarrinho[i][2]  +'">  ';
         conteudo += '</div>';
         conteudo += '<div class="divQtd" >';
         conteudo += '<input  data-quantity="pop" class="divQtd1" type="submit" id="bMenos" value= "-" readonly="readonly"> ';
         conteudo += '<input  autocomplete="off" data-quantity="input" class="divQtd1" type="tel" id="bQtd" value= "' +  arrayCarrinho[i][5]  +'" readonly="readonly"> ';
         conteudo += '<input  data-quantity="push" class="divQtd1" type="submit" id="bMais" value= "+" readonly="readonly"> ';
         conteudo += '</div>';
         conteudo += '<div class="divTotal" >';
         conteudo += '<input class="divTotal1" type="text" id="btotal" readonly="readonly"> ';
         conteudo += '</div>';
         conteudo += '</div>';

        $("#tabelaCarrinho").append(conteudo)


     }
 }

 function total(){

   var arrayCarrinho = JSON.parse(bancoDadosCarrinho.getItem("dadosCarrinho"));

   $("#bMais").click(function(){
            


      for (var i = 0; i < arrayCarrinho.length; i++){
         var valor1 = arrayCarrinho[i][5];
         //console.log(valor1);
         var valor1 = valor1 + 1;
         arrayCarrinho[i].splice(5, 1, valor1);
         $("#bQtd").val(valor1);
         
         var total = valor1 * arrayCarrinho[i][2];
         console.log(total);
         $("#btotal").val(total);
     }
   });

      
 
        

   $("#bMenos").click(function(){
      var valor1 = parseInt($("#bQtd").val());
      var valor1 = valor1 - 1;
      $("#bQtd").val(valor1);
      console.log(valor1);
   });

  }