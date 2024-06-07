// GEOLOCALIZAÇÃO
function getLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationElement.innerHTML = "Geolocalização não é suportada por este navegador.";
    }
}

function showPosition(position) {
    //ADIÇÃO DE VARIAVEIS
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const R = 6371;// Raio da Terra em quilômetros
    let dLat = 0;
    let dLon = 0;
    let a = 0;
    let c = 0;
    

    //verifica qual é a filial mais proxima
    let menorDistancia = 9999999;
    let nome = "";
    let clat = 0;
    let clon = 0;

    //ARAGUAINA-TO
    dLat = degToRad(latitude - -7.186965); // Diferença de latitude em radianos
    dLon = degToRad( longitude - -48.209859); // Diferença de longitude em radianos
    console.log(dLat);
    console.log(dLon);
    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(latitude)) * Math.cos(degToRad(-7.186965)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance1 = R * c; // Distância em quilômetros
    //VERIFICA SE A DISTANCIA DA CIDADE E INFERIOR A DA CIDADE ANTERIOR
    if(distance1 < menorDistancia){
        menorDistancia = distance1;
        nome = "Araguaina-TO";
        clat = -7.186965;
        clon = -48.209859;
    }

    //RECIFE-CE
    dLat = degToRad(latitude - -8.053210); // Diferença de latitude em radianos
    dLon = degToRad( longitude - -34.893310); // Diferença de longitude em radianos
    console.log(dLat);
    console.log(dLon);
    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(latitude)) * Math.cos(degToRad(-8.053210)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance2 = R * c; // Distância em quilômetros
    //VERIFICA SE A DISTANCIA DA CIDADE E INFERIOR A DA CIDADE ANTERIOR
    if(distance2 < menorDistancia){
        menorDistancia = distance2;
        nome = "Recife-CE";
        clat = -8.053210;
        clon = -34.893310;
    }

    //SAO PAULO-SP
    dLat = degToRad(latitude - -23.563932); // Diferença de latitude em radianos
    dLon = degToRad( longitude - -46.645866); // Diferença de longitude em radianos
    console.log(dLat);
    console.log(dLon);
    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(latitude)) * Math.cos(degToRad(-23.563932)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance3 = R * c; // Distância em quilômetros
    //VERIFICA SE A DISTANCIA DA CIDADE E INFERIOR A DA CIDADE ANTERIOR
    if(distance3 < menorDistancia){
        menorDistancia = distance3;
        nome = "São Paulo-SP";
        clat = -23.563932;
        clon = -46.645866;
    }
    
    //BELO-HORIZONTE-MG
     dLat = degToRad(latitude - -19.910016); // Diferença de latitude em radianos
     dLon = degToRad( longitude - -43.947872); // Diferença de longitude em radianos
     console.log(dLat);
     console.log(dLon);
     a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
             Math.cos(degToRad(latitude)) * Math.cos(degToRad(-19.910016)) *
             Math.sin(dLon / 2) * Math.sin(dLon / 2);
     
     c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     const distance4 = R * c; // Distância em quilômetros
     //VERIFICA SE A DISTANCIA DA CIDADE E INFERIOR A DA CIDADE ANTERIOR
     if(distance4 < menorDistancia){
         menorDistancia = distance4;
         nome = "Belo-Horizonte-MG";
         clat = -19.910016;
         clon = -43.947872;
     }

    //BELEM-PA
    dLat = degToRad(latitude - -1.385975); // Diferença de latitude em radianos
    dLon = degToRad( longitude - -48.482233); // Diferença de longitude em radianos
    console.log(dLat);
    console.log(dLon);
    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(latitude)) * Math.cos(degToRad(-1.385975)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance5 = R * c; // Distância em quilômetros
    //VERIFICA SE A DISTANCIA DA CIDADE E INFERIOR A DA CIDADE ANTERIOR
    if(distance5 < menorDistancia){
        menorDistancia = distance5;
        nome = "Belem-PA";
        clat = -1.385975;
        clon = -48.482233;
    }

    //LANÇA NO MAPA A MENOR ROTA
    L.Routing.control({
        waypoints: [
            L.latLng( latitude,  longitude),
            L.latLng(clat, clon)
        ]
    }).addTo(map);
    
    //ADICIONA NA DIV A CIDADE E A DISTANCIA DA MENOR ROTA
    const locationElement = document.getElementById('city-loc');
    locationElement.innerHTML = nome + " " +menorDistancia.toFixed(2) + " km";
}
//FUNÇÃO AUXILAR PARA DESCOBRIA A DISTANCIA DO LOCAL DO USUARIO PARA A FILIAL
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

//LOCALIZAÇÃO INICIAL DIRECIONADA PARA PALMAS PONTO CENTRAL DO BRASIL
var map = L.map('map').setView([-10.239747, -48.327344], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//ADIÇÃO DE MARCAÇÕES PARA LOCALIZAÇÃO DAS CIDADES
//ARAGUAINA-TO
var marker1 = L.marker([-7.186965, -48.209859]).addTo(map);
marker1.bindPopup("<b>Araguaina-TO</b>").openPopup();
//RECIFE-CE
var marker2 = L.marker([-8.053210, -34.893310]).addTo(map);
marker2.bindPopup("<b>Recife-CE</b>").openPopup();
//SÃO PAULO-SP
var marker3 = L.marker([-23.563932, -46.645866]).addTo(map);
marker3.bindPopup("<b>São Paulo-SP</b>").openPopup();
//BELO HORIZONTE-MG
var marker4 = L.marker([-19.910016, -43.947872]).addTo(map);
marker4.bindPopup("<b>Belo Horizonte-MG</b>").openPopup();
//BELEM-PA
var marker5 = L.marker([-1.385975, -48.482233]).addTo(map);
marker5.bindPopup("<b>Belem-PA</b>").openPopup();