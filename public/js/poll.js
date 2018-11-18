async function poll() {
    let res = await fetch(window.location.href + 'refreshTweets');
    res = await res.json();
    res.tweets.map(value => {
        console.log(value);
        let elem = document.createElement('blockquote')
        let a = document.createElement('a');
        elem.className = 'twitter-tweet';
        if(!value.retweeted_status.user) {
            a.href = `https://twitter.com/${value.user.screen_name}/status/${value.id_str}`;
            console.log(a.href);
            elem.appendChild(a);
            document.getElementById('tweets').appendChild(elem)
        } else {
            a.href = `https://twitter.com/${value.retweeted_status.user.screen_name}/status/${value.retweeted_status.id_str}`;
            console.log(a.href);
            elem.appendChild(a);
            document.getElementById('tweets').appendChild(elem)

        }
    });
}


setInterval(poll, 250);

