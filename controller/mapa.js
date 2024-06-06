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