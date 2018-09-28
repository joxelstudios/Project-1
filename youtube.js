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

getEntries();

function getEntries() {

    $.ajax({
        url: "https://gdata.youtube.com/feeds/api/playlists/PL48A83AD3506C9D36?v=2&alt=json",
        url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL48A83AD3506C9D36&key=" + apiKey,
        dataType: "jsonp",

        success: function (data) {
            var video_id = "";
            $.each(data.items, function (i, item) {
                video_id = video_id + item.snippet.resourceId.videoId + ',';
            });
            video_id = video_id.substring(0, video_id.length - 1);
            console.log(video_id);
            console.log(data)
            $.ajax({
                url: "https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics%2Csnippet%2Cplayer&id=" + video_id + "&key=" + apiKey,
                dataType: "jsonp",

                success: function (data) {
                    $.each(data.items, function (i, item) {
                        var title = item.snippet.title;
                        var thumb = item.snippet.thumbnails.default.url;
                        var numLikes = item.statistics.likeCount;
                        var numDislikes = item.statistics.dislikeCount;
                        var viewCount = item.statistics.viewCount;

                        $('#entries tbody').append("<tr><td id='editinplace'>" + title + "</td> <td><img alt='" + title + "' src='" + thumb + "'></img></td><td>" + numLikes + "</td><td>" + numDislikes + "</td><td>" + viewCount + "</td>" + "<td style='display: none' id='delete'><input type='button' class='del' value='Избриши'/></td>" + "</tr>");
                    });
                    $("table").trigger("update");
                    setEditInPlace();
                }
            });

            $("table").trigger("update");
            setEditInPlace();
        }
    });

}

setEditInPlace();

function setEditInPlace() {
    $("td").each(function () {
        var id = $(this).attr("id");
        if (id == 'editinplace') {
            $(this).editInPlace({
                callback: function (unused, enteredText) {
                    return enteredText;
                },
                show_buttons: true
            });
        }
    });
}
$(document).ready(function () {

    $("#entries").tablesorter();

    $("#edit").click(function () {
        var text = $("#edit").val();
        if (text == 'Измени') {
            $("#edit").val('Затвори');
            $("td").each(function () {
                var id = $(this).attr("id");
                if (id == 'delete') $(this).show('slow');
            });
        } else {
            $("#edit").val('Измени');
            $("td").each(function () {
                var id = $(this).attr("id");
                if (id == 'delete') $(this).hide('slow');
            });
        }
    });
    $('.del').live('click', function () {
        $(this).parent().parent().remove();
        $("#entries").trigger("update");
    });
});

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
        videoId: 'Bkhpiwvvf8k',
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