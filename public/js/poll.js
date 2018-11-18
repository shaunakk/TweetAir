
async function poll() {
    let res = await fetch(window.location.href + 'refreshTweets');
    res = await res.json();
    console.log(res.tweets);
}


setInterval(poll, 250)

