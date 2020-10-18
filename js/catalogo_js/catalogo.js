var arrayJogosPopulares = [['Shurihito','img1.png','R$ 12,00','um jogador controla um monstro que tenta destruir uma cidade japonesa enquanto os trabalhadores da cidade a reconstroem e tentam deter o monstro',false]
, ['Alteria','img2.gif','R$ 15,00','Aventura',false]
,['Ludum Dare','img3.PNG','R$ 20,00','Gerencie seu bate-papo, mencione comentários e mantenha seus espectadores entretidos com o jogo que você está jogando!',false]
];

var arrayJogos=[['DayZ Steam Key GLOBAL','img4.jpg',' R$ 75,00','Quem pode ser confiável no apocalipse zumbi? A situação fica muito grave. Você é uma das raras pessoas que sobreviveram ao surto de um vírus mortal',false],
['Dead by Daylight','img5.jpg','R$ 112,00','Dead by Daylight (PC) é um jogo de horror de sobrevivência multijogador assimétrico. Um grupo de até quatro sobreviventes tenta escapar de um lugar de pesadelo onde um assassino sobrenaturalmente poderoso tenta sacrificá-los a um homem',false],
['Among Us (PC)','img7.jpg','R$ 31,00', 'Um jogo de festa online e local de trabalho em equipe e traição para 4-10 jogadores ... no espaço!',false],
['eFootball PES 2021','img8.jpg','R$ 49,00','Experimente o jogo de futebol mais realista e autêntico com eFootball PES 2021',false],
['NBA 2K21','img9.jpg','R$ 229,00','NBA 2K21 é a abordagem mais recente para toda a série NBA 2K',false],
['Medieval Dynasty','img10.jpg','R$ 306,00','Europa no início da Idade Média - os nobres e o clero governam e o comércio entre as nações traz prosperidade, bem como inveja, desconfiança e ganância.',false],
['G.I. Joe','img11.jpg','R$ 209,92','G.I. Joe e Cobra estão de volta! G.I. Joe: Operation Blackout é um clássico jogo de tiro em terceira pessoa baseado em equipes, onde você joga como seus personagens favoritos do Time G.I. Joe e Team Cobra',false],
['Call of Duty','img12.jpg','R$ 153,28','é a terceira entrada na série Black Ops desenvolvida pela Treyarch dentro da franquia de tiro em primeira pessoa best-seller',false],
];


var arrayCarrinho = [];


$(document).ready(function(){
    listaJogos($(".divMaisVendidos"), arrayJogosPopulares, "botaoRodape");
    listaJogos($(".divJogos"), arrayJogos, "botaoRodapeProdutos");
    
});

function listaJogos(idJogos, lista, bComprar){
    
    $(idJogos).html("");

    $(".div-filmes").html("");
    console.log(lista);
    for (var i = 0; i < lista.length; i++){
      
        var conteudo = "";
      
        
        conteudo += '<div class="div-card">';
        conteudo += '<div class="divImagem">';
        conteudo += '<img src="../img/catalogo_img/'+ lista[i][1] +  '">';
        conteudo += '</div>';
        conteudo += '<div class="div-titulo"><br>';
        conteudo += '<h7>' + lista[i][0] + '</h7>';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao" ><b>' + lista[i][2] + '</b>';
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

    $(".botaoRodape").click(function(){
        
		var id = $(this).attr("addCarrinho");
	    arrayJogosPopulares[id].splice(4, 1, true);
        arrayCarrinho.push(arrayJogosPopulares[id]);
        console.log(arrayCarrinho);
        listaJogos($(".divMaisVendidos"), arrayJogosPopulares,"botaoRodape" );
    });    

    $(".botaoRodapeProdutos").click(function(){
        
		var id = $(this).attr("addCarrinho");
	    arrayJogos[id].splice(4, 1, true);
        arrayCarrinho.push(arrayJogos[id]);
		console.log(arrayCarrinho);
        listaJogos($(".divJogos"), arrayJogos, "botaoRodapeProdutos");
    });
}