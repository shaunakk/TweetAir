var map;

function formSubmit() {
    let city = document.getElementById("input").value;
    heatmap.set('center', new google.maps.LatLng());
    
}

async function initMap() {
    let heatmapData = [];
    let result = await fetch('https://www.purpleair.com/json');
    result = await result.json();
    result = result.results;
    console.log(result[0]);
    result = result.filter(val => {
        if(val.Stats == null) {
            return false;
        }
        const stats = JSON.parse(val.Stats);
        return stats.v > 10;
    })
    result.map(val => {
        let counter = 0;
        for (let i = 0; i < Math.round(JSON.parse(val.Stats).v); i++) {
            heatmapData.push(new google.maps.LatLng(val.Lat, val.Lon))
        }
        return val;
    });
    console.log(heatmapData);




    
    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: sanFrancisco,
        zoom: 5,
        mapTypeId: 'satellite'
    });
    
    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
    });
    heatmap.set('radius', 30)
    heatmap.setMap(map);
}



/* Data points defined as an array of LatLng objects */
