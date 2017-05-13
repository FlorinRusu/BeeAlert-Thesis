/**
 * Created by Florin on 5/7/2017.
 */
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: new google.maps.LatLng(48.533646, 24.054051),
        mapTypeId: 'terrain'

    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    script.src = '/assets/js/earth.json';
    document.getElementsByTagName('head')[0].appendChild(script);

    map.data.setStyle(function(feature) {
        var magnitude = feature.getProperty('mag');
        return {
            icon: getCircle(magnitude)
        };
    });
}

function getCircle(magnitude) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(2.2, magnitude) / 2,
        strokeColor: 'white',
        strokeWeight: .5

    };
}

function eqfeed_callback(results) {
    map.data.addGeoJson(results);
}
