
var arrayJogosPopulares = [['Shurihito','img1.png',12.01,'um jogador controla um monstro que tenta destruir uma cidade japonesa enquanto os trabalhadores da cidade a reconstroem e tentam deter o monstro',false,1]
, ['Alteria','img2.gif',15.12,'Aventura',false,2]
,['Ludum Dare','img3.PNG',20.75,'Gerencie seu bate-papo, mencione comentários e mantenha seus espectadores entretidos com o jogo que você está jogando!',false,3]
];

var arrayJogos=[['DayZ Steam Key GLOBAL','img4.jpg',75.01,'Quem pode ser confiável no apocalipse zumbi? A situação fica muito grave. Você é uma das raras pessoas que sobreviveram ao surto de um vírus mortal',false,4],
['Dead by Daylight','img5.jpg',112.02,'Dead by Daylight (PC) é um jogo de horror de sobrevivência multijogador assimétrico. Um grupo de até quatro sobreviventes tenta escapar de um lugar de pesadelo onde um assassino sobrenaturalmente poderoso tenta sacrificá-los a um homem',false,5],
['Among Us (PC)','img7.jpg',31.15, 'Um jogo de festa online e local de trabalho em equipe e traição para 4-10 jogadores ... no espaço!',false,6],
['eFootball PES 2021','img8.jpg',49.12,'Experimente o jogo de futebol mais realista e autêntico com eFootball PES 2021',false,7],
['NBA 2K21','img9.jpg',229.59,'NBA 2K21 é a abordagem mais recente para toda a série NBA 2K',false,8],
['Medieval Dynasty','img10.jpg',306.16,'Europa no início da Idade Média - os nobres e o clero governam e o comércio entre as nações traz prosperidade, bem como inveja, desconfiança e ganância.',false,9],
['G.I. Joe','img11.jpg',209.92,'G.I. Joe e Cobra estão de volta! G.I. Joe: Operation Blackout é um clássico jogo de tiro em terceira pessoa baseado em equipes, onde você joga como seus personagens favoritos do Time G.I. Joe e Team Cobra',false,10],
['Call of Duty','img12.jpg',153.28,'é a terceira entrada na série Black Ops desenvolvida pela Treyarch dentro da franquia de tiro em primeira pessoa best-seller',false,11],
];


var arrayCarrinho = [];
var bancoDadosCarrinho = window.localStorage;
var validaLoginStorage = window.localStorage;


$(document).ready(function(){
    
    listaJogos($(".divJogos"), arrayJogos, "botaoRodapeProdutos");
    // listaJogos($(".divMaisVendidos"), arrayJogosPopulares, "botaoRodape");  
    mostrarLogado();

    fazerLogof()

    
    $("#logof").click(function(){
        window.location.reload();
    });

    

    
});

function listaJogos(idJogos, lista, bComprar){
    
    $(idJogos).html("");

    $(".div-filmes").html("");
    
    for (var i = 0; i < lista.length; i++){
      
        var conteudo = "";
      
        
        conteudo += '<div class="div-card">';
        conteudo += '<div class="divImagem">';
        conteudo += '<img src="../img/catalogo_img/'+ lista[i][1] +  '">';
        conteudo += '</div>';
        conteudo += '<div class="div-titulo"><br>';
        conteudo += '<h7>' + lista[i][0] + '</h7>';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao" ><b> R$ ' + lista[i][2] + '</b>';
        conteudo += '</div>';
        conteudo += '<div class="div-rodape">'; 

        if (lista[i][4] == false){
            conteudo += '<button class="' + bComprar + '" addCarrinho = "' + i + '">Comprar</button>';
            
        }   
        else{
            conteudo += '<button class="'+ bComprar +' botaoComprado" addCarrinho="' + i + '">Comprado</button>';
        }
        conteudo += '</div>';
        conteudo += '</div>';

        idJogos.append(conteudo);
    }


    $("." + bComprar).click(function(){
        
        Storage = window.localStorage;
        var dadosDoStorage = JSON.parse(Storage.getItem('dados'));
        

        var arrayCarrinho = JSON.parse(bancoDadosCarrinho.getItem("dadosCarrinho") || '[]');
        var validaLogin = JSON.parse(validaLoginStorage.getItem("userLogado") || '[]');

        var id = $(this).attr("addCarrinho");
        lista[id].splice(4, 1, true);


        var produto = false;
        
        var emailLogin = String($("#valor1").val());
        console.log(emailLogin);
        

        userCadastrado = false;

        if(dadosDoStorage != undefined){
            for (var i = 0; i < dadosDoStorage.length; i++){
                for (var j = 0; j < validaLogin.length; j++){
                    if(validaLogin[j][0] == dadosDoStorage[i][1]){
                        userCadastrado = false;
                    }else{
                        userCadastrado = true;
                        }
                        console.log("login " + validaLogin[0]);
                        console.log("cadastro " + dadosDoStorage[i][1]);                    
            }}
            

        }

        if (userCadastrado == true){
            if (arrayCarrinho.length < 1){
                arrayCarrinho.push(lista[id]);
                bancoDadosCarrinho.setItem("dadosCarrinho",JSON.stringify(arrayCarrinho));
                listaJogos($(idJogos), lista, bComprar);
            } else{

                for (var i = 0; i < arrayCarrinho.length; i++){
                    
                        
                    if (arrayCarrinho[i][0] == lista[id][0]){
                        produto = false;
                        alert("Produto Ja add ao carrinho")
                        break
                    }else{
                        produto = true
                    }
                }}
            
            if (produto == true){
                arrayCarrinho.push(lista[id]);
                bancoDadosCarrinho.setItem("dadosCarrinho",JSON.stringify(arrayCarrinho));
                listaJogos($(idJogos), lista, bComprar);
            
            }
        }else{
            alert("Por favor, Cadastre-se")
        }
    

    });

}

function fazerLogof(){

    var validaLogin = JSON.parse(validaLoginStorage.getItem("userLogado") || '[]');
    $(".logof").click(function(){
        localStorage.removeItem("userLogado");
        window.location.href = "../paginas/catalogo1.html";
        
    });
}


function mostrarLogado(){

    var validaLogin = JSON.parse(validaLoginStorage.getItem("userLogado") || '[]');
    if (validaLogin [0] != undefined){

        var login = String(validaLogin[0]);
        teste2 = login.split("@");
        login = teste2[0];
        
        
        
        
        var conteudo = ""

       
        conteudo += '<tr>';
       
        conteudo += '<td style="width:120px" ><p class="formul3" id="nomeLogin">  ' +login + ' </p></td>';

        if (window.location.pathname.includes("index.html")){
            conteudo += '<td>  <img  id="logof" class="logof" src="img/sair1.png" width="35" height="35"></td>';
        } 
        else{
            conteudo += '<td>  <img  id="logof" class="logof" src="../img/sair1.png" width="35" height="35"></td>';
        }
        conteudo += '</tr>';
       


        ($(".tableIcon")).append(conteudo);

    }else{
        
        
        var conteudo = ""

       
        conteudo += '<tr>';
        conteudo += '</tr>';
       


        ($(".tableIcon")).append(conteudo);
    }
}


