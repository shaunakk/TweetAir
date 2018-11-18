async function poll() {
    let res = await fetch(window.location.href + 'refreshTweets');
    res = await res.json();
    res.tweets.map(value => {
        if(typeof(value.coordinates) == Object) {
            const lat = value.coordinates.coordinates[0];
            const long = value.coordinates.coordinates[1];
            

        }
    });
}


setInterval(poll, 250)

