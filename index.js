var map = L.map('map').setView([40.627263, -73.999970], 5),
    realtime = L.realtime('ciudades.json', {
}).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker().addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

var zoom = 10;

window.change_map = function(){
 
var e = document.getElementById("loc");
var v = e.value;

if( v == "1" ){ map.setView([25.764203, -80.209132], zoom); }
else if( v == "2" ) { map.setView([28.469014, -81.375647], zoom); }
else if( v == "3" ) { map.setView([40.627263, -73.999970], zoom); }
}