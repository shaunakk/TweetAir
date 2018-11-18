var map;
let heatmap;
async function formSubmit() {
    console.log("form submit called");
    let city = document.getElementById("input").value;
    let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBbeNz1g3SRPbcboyQ75mOndodTgqwKab8`);
    res = await res.json();
    console.log(res);
    console.log(res.results[0].geometry.location.lat);
    console.log(res.results[0].geometry.location.lng);
    let location = new google.maps.LatLng(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng);
    map.setCenter(location);
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: res.results[0].formatted_address
    });



}

async function initMap() {
    let heatmapData = [];
    let result = await fetch('https://www.purpleair.com/json');
    result = await result.json();
    result = result.results;
    result = result.filter(val => {
        if (val.Stats == null) {
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





    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

    map = new google.maps.Map(document.getElementById('map'), {
        center: sanFrancisco,
        zoom: 5,
        mapTypeId: 'satellite'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
    });
    heatmap.set('radius', 30)
    heatmap.setMap(map);
}



/* Data points defined as an array of LatLng objects */
