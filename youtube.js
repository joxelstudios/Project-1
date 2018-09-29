// // ajax call to Last.Fm api // this might not be in our final submission, but keeping this code for now.

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






/////////////////////this code is for the embedded iFrame player

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

var apiKey = "AIzaSyCidNiMCQoVdkF4cEvUdGbhTut0WujY9D8";
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
        //this part of code determines which video we want to play.
        videoId: 'tCnBrrnOefs',
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
        setTimeout(stopVideo, 600000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

// MUSIC ARRAYS// 
//FORMAT: ARTIST "SONG TITLE" - VIDEOID  ----- whether it works when embedded
//-------------------------------------
function pickSong() {
var sadness = ["nZq_jeYsbTs", "Va_RU-tph-Y", "Na2fIC3CXYE",  "4N3N1MlvVc4", "LLwRLC2AB3M", "D_P-v1BVQn8", "Yw9l9jLsyiU" ];
var randomSadSong = sadness[Math.floor(Math.random() * ((sadness.length + 1)))];
console.log(randomSadSong)
//sadness tunes////////////////////////////////////////
//Radiohead "How To Disappear Completely" - nZq_jeYsbTs     -----WORKS
//The Anniversary "All Things Ordinary" - Va_RU-tph-Y       -----WORKS
//nofx "My Orphan Year (Acoustic)" - Na2fIC3CXYE            -----WORKS
//Gary Jules "Mad World" - 4N3N1MlvVc4                      -----WORKS
//Gemini "Blue" - LLwRLC2AB3M                               -----WORKS
//Gilbert O'Sullivan "Alone Again(Naturally)" - D_P-v1BVQn8 -----WORKS
//Joe Harnell "The Lonely Man" - Yw9l9jLsyiU                -----WORKS

//XXXTENTACION "SAD!"- pgN-vvVVxMA                                 ------ //NOT WORKING!!!!
//Eminem "Mockingbird"- S9bCLPwzSC0                               --------//NOT WORKING!!!!
//Tame Impala "The Less I Know The Better" - eYUPa2X4aoc          --------//NOT WORKING!!!!
//Joji "Slow Dancing In The Dark" - X--KAhRMaQY                   --------//NOT WORKING!!!!
//Coldplay "The Scientist" - RB-RcX5DS5A                          --------//NOT WORKING!!!!
//The Smiths "There Is A Light That Never Goes Out" - y9Gf-f_hWpU --------//NOT WORKING!!!!

var happiness = ["tCnBrrnOefs", "P68J72bsSNk", "mMfxI3r_LyA","xumGNwplds8", "GHUc6juS0YQ"];
var randomhappySong = happiness[Math.floor(Math.random() * ((happiness.length + 1)))];
console.log(randomhappySong)
//HAPPINESS TUNES /////////////////////////////////////
// Justice "D.A.N.C.E." - tCnBrrnOefs                   -----WORKS
//Guttermouth "Perfect World" -P68J72bsSNk              -----WORKS
//Modjo "Lady(Hear Me Tonight)" - mMfxI3r_LyA           -----WORKS
//Stardust "Music Sounds Better With You" - xumGNwplds8 -----WORKS
//James Brown "I Feel Good(I Got You)" - GHUc6juS0YQ    -----WORKS



var anger = ["vlXi129C39M", "CCC8vCxEXQo", "0ZE1bmcWMUY", "PBWq1OtN7Cc", "RD_kgKyDk6c", "R8fLOJswWtk", "ZrFTR9fucr8", "Wh-Jf_udRhs"]
//ANGER TUNES//////////////////////////////////////////
var randomAngrySong = anger[Math.floor(Math.random() * ((anger.length + 1)))];
console.log(randomAngrySong)
//Noisia & Evol Intent "Long Gone" - vlXi129C39M                 -----WORKS
//Trampa & Cookie Monsta "Move The Crowd" - CCC8vCxEXQo          -----WORKS
//August Burns Red "Meddler" - 0ZE1bmcWMUY                       -----WORKS
//Hatebreed "Conceived Through An Act of Violence" - PBWq1OtN7Cc -----WORKS
//Ramones "Ignorance is Bliss" - RD_kgKyDk6c                     -----WORKS
//Sex Pistols "God Save The Queen" - R8fLOJswWtk                ------WORKS
//I Wrestled A Bear Once "Smells Like Kevin Bacon" - ZrFTR9fucr8 -----WORKS
//Funtcase "Scary Yikes Grrz" - Wh-Jf_udRhs                      -----WORKS

 


var neutral = ["6zf6yce6g7g", "yvK3t0TdYfQ", "A5o4fn5imNw", "zfcHq0hhFWg", "EAEKK8xCpBY", "_FrOQC-zEog", "Pz1W1OLkw14", "3Q9rewnLFYw", "slldMEPvUqA", "0KJHH08FPpE", "_BObK59njSg"]
//NEUTRAL TUNES////////////////////////////////////////
//Killedmyself "are you lost?" - 6zf6yce6g7g                    -----WORKS
//Morning High "Sativa Satva" - yvK3t0TdYfQ                     -----WORKS
//Shogondo "I See What U Mean" - A5o4fn5imNw                    -----WORKS
//Tame Impala "Half Full Glass Of Wine" - zfcHq0hhFWg           -----WORKS
//Dispatch "The General" - EAEKK8xCpBY                          -----WORKS
//Pink Floyd "Comfortably Numb" - _FrOQC-zEog                   -----WORKS
// High Contrast "If We Ever" - Pz1W1OLkw14                    ------WORKS
//Flux Pavillion "I Can't Stop" - 3Q9rewnLFYw                  ------WORKS
//The Whispers "And The Beat Goes On" - slldMEPvUqA            ------WORKS
//Volac "Open Your Mind" - 0KJHH08FPpE                         ------WORKS
//Washed Out "Feel It All Around"  - _BObK59njSg                -----WORKS

//Our Lady Peace "Clumsy" - xp2P6JKc1QE           --------//NOT WORKING!!!
//The Smashing Pumpkins "Today" - zAgvyL9-usc     --------//NOT WORKING!!!
//Chet Faker "Gold" - hi4pzKvuEQM                  ------ //NOT WORKING!!!
//Bob Marley "Smile Jamaica" - MAdoRNiepPA         ------ //NOT WORKING!!!
//M83 "Midnight City" - dX3k_QDnzHE                ------ //NOT WORKING!!!
//Mt. Joy "Astrovan" - etrjS8dYeFc                 ------ //NOT WORKING!!!
//Coldplay "Adventure Of A Lifetime" - QtXby3twMmI ------ //NOT WORKING!!!
//Nosaj Thing "Realize" - _Rf-pixOCEQ              ------ //NOT WORKING!!!
//childish gambino "redbone" - Kp7eSUU9oy8         ------ //NOT WORKING!!!
}

pickSong()