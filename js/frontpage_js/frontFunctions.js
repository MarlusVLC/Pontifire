$(document).ready(function(){
    mensagem = [];
    menuRedirect();
 

        


  })




  function menuRedirect(){
    storage = window.localStorage;

    if (window.location.pathname.includes("index.html")){

        var mensagemRec = storage.getItem("mensagem_de_transicao");

        if (mensagemRec == "GoToCatalogo"){ document.getElementById("tituloCatalogo").scrollIntoView();  }
        else if (mensagemRec == "GoToVideo"){ document.getElementById("tituloVideo").scrollIntoView();  }
        storage.setItem("mensagem_de_transicao", " ");



        $(".imgTitle").click(function(){
            window.location.assign("index.html");
        })

        $(".aGames").click(function(){
            // window.location.assign("paginas/catalogo1.html");
            var elem = document.getElementById("tituloCatalogo");
            elem.scrollIntoView();
        })

        $(".aAboutUs").click(function(){
            // window.location.assign("paginas/Sobre.html");
            var elem = document.getElementById("tituloVideo");
            elem.scrollIntoView();
        })
        
        $(".imgLogin").click(function(){
            window.location.assign("paginas/login.html");
        })

        $(".imgCarrinho").click(function(){
            window.location.assign("paginas/carrinho.html");
        })
    }


    else{
        $(".imgTitle").click(function(){
            window.location.assign("../index.html");
        })
        $(".aGames").click(function(){
            // window.location.assign("../paginas/catalogo1.html");
            storage.setItem("mensagem_de_transicao", "GoToCatalogo");
            window.location.assign("../index.html");
        })
        $(".aAboutUs").click(function(){
            // window.location.assign("../paginas/Sobre.html");
            storage.setItem("mensagem_de_transicao", "GoToVideo");
            window.location.assign("../index.html");
        })
        $(".imgLogin").click(function(){
            window.location.assign("../paginas/login.html");
        })

        $(".imgCarrinho").click(function(){
            window.location.assign("../paginas/carrinho.html");
        })

    }
  }