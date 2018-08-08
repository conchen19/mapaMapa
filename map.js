var ourLoc;
var view;
var map;

function init() {
    ourLoc = ol.proj.fromLonLat([2.349014, 48.864716]); 

    view = new ol.View({
        center: ourLoc,
        zoom: 6 
    });

    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile ({
                source: new ol.source.OSM()
            })
        ],

        loadTilesWhileAnimating: true,
        view: view
    }); 
}

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("loaded")
    init();
});

function panHome() {
    view.animate ({
        center: ourLoc,
        duration: 2000
    });
}

function panToLocation() {
    var countryName = document.getElementById("country-name").value;
    query = query.replace(/ /g, "%20");
    alert(query);

    var countryRequest = new XMLHttpRequest(); 
    countryRequest.open('GET', query, false); 

    countryRequest.send(); 

    var countryInformation = JSON.parse(countryRequest.response(Text))

    if (countryName === "United States"){
        alert("You did not enter a real country name!");
        return; 
    }
    var query = "https://restcountries.eu/rest/v2/name/" +countryName; 

    var lon = countryInformation[0].lonlng[1];
    var lat = countryInformation[0].latlng[0];
    var location = ol.proj.fromLonLat([lon,lat]);

    view.animate({
        center: location,
        duration: 2000
    });
}

