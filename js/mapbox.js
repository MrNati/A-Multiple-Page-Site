"strict";

mapboxgl.accessToken = 'pk.eyJ1IjoibXJuYXRpIiwiYSI6ImNqc240dDdncjA4bGw0OXQ5ZzNqMmp0ZDAifQ.TaRTSgXP6_4kHz61XIqD7A';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mrnati/cjsn82fdl06e21fmmg9d3a2rn',

    
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());