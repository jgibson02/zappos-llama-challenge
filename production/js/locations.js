var map;
// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.
var citymap = {
    southamerica: {
        center: { lat: -13.049692, lng: -72.034785 },
        population: 80000000
    },
    centralamerica: {
        center: { lat: 19.436660, lng: -99.132636 },
        population: 90000000
    },
    northamerica: {
        center: { lat: 39.086419, lng: -109.010272 },
        population: 50000000
    },
    eurolama: {
        center: { lat: 41.848722, lng: -1.668994 },
        population: 70000000
    }
};

function initMap() {
    // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: { lat: 18, lng: -40 },
        mapTypeId: 'terrain'
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
            strokeColor: '#c8802a',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#ffdeb7',
            fillOpacity: 0.35,
            map: map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 100
        });
    }
}
