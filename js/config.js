var config = {
    "web_service_base": "http://maps.co.mecklenburg.nc.us/rest/",
    "default_map_center": [35.270, -80.837],
    "default_map_zoom": 10,
    "default_map_min_zoom": 10,
    "default_map_max_zoom": 18,
    "base_map_layers": [{
        "id": "meckbase",
        "name": "Mecklenburg Base Map",
        "attribution": "Mecklenburg County Base Map",
        "wmsurl": "http://maps.co.mecklenburg.nc.us/mbtiles/mbtiles-server.php?db=meckbase.mbtiles&z={z}&x={x}&y={y}.png",
        "maxZoom": 18,
        "minZoom": 9,
        "isVisible": true,
        "isBaseLayer": true
    }, {
        "id": "osm",
        "name": "Open Street Map",
        "attribution": "Provided by Tiles@Home",
        "wmsurl": "http://tile.openstreetmap.org/{z}/{x}/{y}.png",
        "maxZoom": 18,
        "minZoom": 9,
        "isVisible": false,
        "isBaseLayer": true
    }],
    "overlay_map_layers": [{
        "id": "nexrad",
        "name": "Nexrad Weather Radar",
        "attribution": "Provided by Iowa State University",
        "wmsurl": "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
        "layers": "nexrad-n0r-900913",
        "format": "image/png",
        "transparent": true,
        "opacity": 0.5,
        "maxZoom": 18,
        "minZoom": 9,
        "isVisible": false,
        "isBaseLayer": false
    }, {
        "id": "environment",
        "name": "Environmental Layers",
        "attribution": "Provided by Mecklenburg County GIS",
        "wmsurl": "http://maps.co.mecklenburg.nc.us/geoserver/wms",
        "layers": "postgis:view_regulated_floodplains,postgis:landfills,postgis:mpl_sites,postgis:water_quality_buffers,postgis:proposed_thoroughfares,postgis:air_pollution_facilities",
        "format": "image/png",
        "transparent": true,
        "opacity": 0.5,
        "maxZoom": 18,
        "minZoom": 15,
        "isVisible": false,
        "isBaseLayer": false
    }, {
        "id": "impervious_surface",
        "name": "Impervious Surface",
        "attribution": "Mecklenburg County GIS",
        "wmsurl": "http://meckmap.mecklenburgcountync.gov/ArcGIS/services/impervious_surface_sm/MapServer/WMSServer",
        "layers": "0,1",
        "format": "image/png",
        "transparent": true,
        "opacity": 0.5,
        "maxZoom": 18,
        "minZoom": 17,
        "isVisible": false,
        "isBaseLayer": false,
        "projection": "EPSG:102113"
    }]
};
