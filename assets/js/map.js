var map = L.map('map', {
    center: [ -13.516772, -71.978723],
    zoom: 18,
    minZoom: 8,
    maxZoom: 20,
});

L.control.scale({    // para la escala
   imperial: false
    }).addTo(map);

     
var basemapOSM = L.tileLayer ('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{		
    attribution: '&copy ; <ahref ="http://osm.org/copyright"> OpenStreetMap </a> contributor'
  });
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var cusco = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:departamento_cusco", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
cusco.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:provincias_cusco",
    format: 'image/png', 
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:distritos_cusco", 
    format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
distritos.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:bancos", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
bancos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:colegios", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
colegios.addTo(map);

var museos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:museos", 
    format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
museos.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:farmacias", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:hoteles", 
    format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:mercados", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_cusco/wms?", {
    layers: "webgis_cusco:restaurantes", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
restaurantes.addTo(map);

var baseMaps = {                   
  "OSM": basemapOSM,
  "Hidrido": googleHybrid,
  "Satelite": googleSat,
  "Terrain": googleTerrain,
    };

var overlayMaps = {                             
    "Departamento": cusco,
    "Provincias": provincias,
    "Distritos": distritos,
    "Bancos": bancos,
    "Colegios": colegios,
    "Museos": museos,
    "Farmacias": farmacias,
    "Hoteles": hoteles,
    "Mercados": mercados,
    "Restaurantes": restaurantes,
  };

L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
  }).addTo(map);