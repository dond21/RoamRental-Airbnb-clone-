mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [78, 28], // starting position [lng, lat]
  zoom: 4, // starting zoom
});
