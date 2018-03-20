const mapboxgl = require('mapbox-gl');

const marker = function(type, coords, map) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV

  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }

  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";


  new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
}

module.exports = {
  marker: marker
}
