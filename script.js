// JavaScript

var map = L.map('map').setView([33.59527438562405, 130.4058296428252], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//アイコン
const whiteIcon = L.icon({
    iconUrl: 'ico.png',
    shadowUrl: 'ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });

L.marker([33.595880768321315, 130.40545024299027], { icon: whiteIcon }).addTo(map).bindPopup('ファミマ');


