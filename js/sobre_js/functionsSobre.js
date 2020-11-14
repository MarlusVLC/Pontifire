$(document).ready(function(){
  // TODO Arrumar a funcao que executa o redirecionamento à partir de uma lista
  // $('.depo').click(function(){
  //   alert($(this).attr("id"));
  //   var id = $(this).attr("id");
  //   redirecionarDepoentes(id);
  // })

  $("#depoNeitherNathan").click(function(){
    window.open("https://neithernathan.itch.io/")
  })

  $("#depoPlaayL").click(function(){
    window.open("https://plaayl.itch.io/")
  })

  $("#depoMahouTangerino").click(function(){
    window.open("https://mahou.itch.io/")
  })
})

var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.45212754, lng: -49.25276682},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.45212754, lng: -49.25276682},
    title: "PUCPR",
    map: mapa
  });

}


function redirecionarDepoentes(id){

    depoentesIdURL = [
                      ["#depoNathan", "https://neithernathan.itch.io/"],
                      ["#depoLuiz",   "https://plaayl.itch.io/" ],
                      ["#depoIsrael", "https://mahou.itch.io/" ],
                     ];

    
    for (var i = 0; i < depoentesIdURL.length; i++){
      if (depoentesIdURL[i].includes(id)){
        window.open(depoentesIdURL[depoentesIdURL.indexOf(id)][1])
        return;
      }
    }  
    
    // alert("Id nao encontrado :(.")
    // alert(id);
    console.log(id);
}


