$(document).ready(() => {
    setInterval(poll, 250);
});
async function poll() {
    let res = await fetch(window.location.href + 'refreshTweets');
    res = await res.json();
    res.tweets.map(value => {
        console.log(value);
        $.ajax({
            url: "https://platform.twitter.com/widgets.js",
            dataType: "script",
        });
        let elem = document.createElement('blockquote')
        let a = document.createElement('a');
        let sentimentAnalysis = document.createTextNode(JSON.stringify(value.sentiment));

        document.getElementById('tweets').insertBefore(sentimentAnalysis, document.getElementById('tweets').childNodes[0])
        elem.className = 'twitter-tweet';
        if (!value.retweeted_status.user) {
            a.href = `https://twitter.com/${value.user.screen_name}/status/${value.id_str}`;
            console.log(a.href);
            elem.appendChild(a);
            document.getElementById('tweets').insertBefore(elem, document.getElementById('tweets').childNodes[0])
        } else {
            a.href = `https://twitter.com/${value.retweeted_status.user.screen_name}/status/${value.retweeted_status.id_str}`;
            console.log(a.href);
            elem.appendChild(a);
            document.getElementById('tweets').insertBefore(elem, document.getElementById('tweets').childNodes[0])

        }
    })
}