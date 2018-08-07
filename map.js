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