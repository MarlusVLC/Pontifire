
var arrayJogosPopulares = [['Shurihito','img1.png',12.01,'um jogador controla um monstro que tenta destruir uma cidade japonesa enquanto os trabalhadores da cidade a reconstroem e tentam deter o monstro',false,1]
, ['Alteria','img2.gif',15.12,'Aventura',false,1]
,['Ludum Dare','img3.PNG',20.75,'Gerencie seu bate-papo, mencione comentários e mantenha seus espectadores entretidos com o jogo que você está jogando!',false,1]
];

var arrayJogos=[['DayZ Steam Key GLOBAL','img4.jpg',75.01,'Quem pode ser confiável no apocalipse zumbi? A situação fica muito grave. Você é uma das raras pessoas que sobreviveram ao surto de um vírus mortal',false,1],
['Dead by Daylight','img5.jpg',112.02,'Dead by Daylight (PC) é um jogo de horror de sobrevivência multijogador assimétrico. Um grupo de até quatro sobreviventes tenta escapar de um lugar de pesadelo onde um assassino sobrenaturalmente poderoso tenta sacrificá-los a um homem',false,1],
['Among Us (PC)','img7.jpg',31.15, 'Um jogo de festa online e local de trabalho em equipe e traição para 4-10 jogadores ... no espaço!',false,1],
['eFootball PES 2021','img8.jpg',49.12,'Experimente o jogo de futebol mais realista e autêntico com eFootball PES 2021',false,1],
['NBA 2K21','img9.jpg',229.59,'NBA 2K21 é a abordagem mais recente para toda a série NBA 2K',false,1],
['Medieval Dynasty','img10.jpg',306.16,'Europa no início da Idade Média - os nobres e o clero governam e o comércio entre as nações traz prosperidade, bem como inveja, desconfiança e ganância.',false,1],
['G.I. Joe','img11.jpg',209.92,'G.I. Joe e Cobra estão de volta! G.I. Joe: Operation Blackout é um clássico jogo de tiro em terceira pessoa baseado em equipes, onde você joga como seus personagens favoritos do Time G.I. Joe e Team Cobra',false,1],
['Call of Duty','img12.jpg',153.28,'é a terceira entrada na série Black Ops desenvolvida pela Treyarch dentro da franquia de tiro em primeira pessoa best-seller',false,1],
];


var arrayCarrinho = [];
var bancoDadosCarrinho = window.localStorage;

$(document).ready(function(){
    
    listaJogos($(".divJogos"), arrayJogos, "botaoRodapeProdutos");
    listaJogos($(".divMaisVendidos"), arrayJogosPopulares, "botaoRodape");  
    

    $("#bListarCarrinho").click(function(){
        
        window.location.href = "../paginas/carrinho.html";
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
        

        var arrayCarrinho = JSON.parse(bancoDadosCarrinho.getItem("dadosCarrinho") || '[]');

        var id = $(this).attr("addCarrinho");
        lista[id].splice(4, 1, true);


        var produto = false;
        
        if (arrayCarrinho.length < 1){
            arrayCarrinho.push(lista[id]);
            bancoDadosCarrinho.setItem("dadosCarrinho",JSON.stringify(arrayCarrinho));
            listaJogos($(idJogos), lista, bComprar);
        } else{

            for (var i = 0; i < arrayCarrinho.length; i++){
                if (arrayCarrinho[i] == lista[id]){
                    produto = false;
                }else{
                    produto = true
                }
                console.log("ArrayCarrinho")
                console.log(arrayCarrinho[i]);
                console.log("lista")
                console.log(lista[id]);
            }
        }
        console.log(arrayCarrinho[i])

        if (produto == true){
            arrayCarrinho.push(lista[id]);
            bancoDadosCarrinho.setItem("dadosCarrinho",JSON.stringify(arrayCarrinho));
            listaJogos($(idJogos), lista, bComprar);
        
        }

    });

}



