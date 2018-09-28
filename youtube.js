//ajax call to Last.Fm api // this might not be in our final submission, but keeping this code for now.

// var artist = "Bob Marley"
// function searchLastFM(artist) {
// var lastKey = "ede245c0055f703efd5f136a5301a6bf";
//     var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=" + lastKey + "&format=json";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {
//           console.log(response)

//           var mostPopularTrack = $("<h1>").text(response.name);
//         })
// }
// searchLastFM(artist)


//this code shows a visual table of the youtube ajax response data

var apiKey = "AIzaSyCidNiMCQoVdkF4cEvUdGbhTut0WujY9D8";


/////////////////////this code is for the embedded iFrame player

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        //this part of code determines which video we wanna play.
        videoId: 'Va_RU-tph-Y',
        ///////////////////////////////////////////////////////
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 60000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}


var sadness = ["nZq_jeYsbTs","y9Gf-f_hWpU","Va_RU-tph-Y","X--KAhRMaQY","RB-RcX5DS5A","eYUPa2X4aoc","Na2fIC3CXYE","S9bCLPwzSC0","pgN-vvVVxMA","4N3N1MlvVc4"]
//sadness tunes////////////////////////////////////////
//Radiohead "How To Disappear Completely" - nZq_jeYsbTs
//The Smiths "There Is A Light That Never Goes Out" - y9Gf-f_hWpU
//The Anniversary "All Things Ordinary" - Va_RU-tph-Y
//Joji "Slow Dancing In The Dark" - X--KAhRMaQY
//Coldplay "The Scientist" - RB-RcX5DS5A
//Tame Impala "The Less I Know The Better" - eYUPa2X4aoc
//nofx "My Orphan Year (Acoustic)" - Na2fIC3CXYE
//Eminem "Mockingbird"- S9bCLPwzSC0
//XXXTENTACION "SAD!"- pgN-vvVVxMA
//Gary Jules "Mad World" - 4N3N1MlvVc4

var happiness = []



var anger = []

var neutral = ["Kp7eSUU9oy8","6zf6yce6g7g","yvK3t0TdYfQ","_Rf-pixOCEQ"]
//NEUTRAL TUNES////////////////////////////////////////
//childish gambino "redbone" - Kp7eSUU9oy8
//Killedmyself "are you lost?" - 6zf6yce6g7g
//Morning High "Sativa Satva" - yvK3t0TdYfQ
//Nosaj Thing "Realize" - _Rf-pixOCEQ
//
//
//
//
//
//