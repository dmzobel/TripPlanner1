const buildMarker = require('./marker.js').marker

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWFubWljaGFlbGQiLCJhIjoiY2plenRsdTJ5MGU4bzJ4bnZqYzh6Nng2OSJ9.kN8zSDJhvCrwuSgj894Pvw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

buildMarker('activity', [-87.6354, 41.8885], map);
