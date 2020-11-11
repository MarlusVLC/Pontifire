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
