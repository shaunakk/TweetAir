var map;

function formSubmit() {
    city = 
    map = new google.maps.Map(document.getElementById('map'), {
        center: city,
        zoom: 13,
        mapTypeId: 'satellite'
    });
    
}

async function initMap() {
    let heatmapData = [];
    let result = await fetch('https://www.purpleair.com/json');
    result = await result.json();
    result = result.results;
    console.log(result[0]);
    result.filter(val => val.Stats.v > 10)
    result.map(val => {
        for (let i = 0; i < Math.round(JSON.parse(val.Stats).v); i++) {
            heatmapData.push(new google.maps.LatLng(val.Lat, val.Lon))

        }
        return val;
    });




    
    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: sanFrancisco,
        zoom: 13,
        mapTypeId: 'satellite'
    });
    
    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
    });
    heatmap.setMap(map);
}

/* Data points defined as an array of LatLng objects */
