var queryUrl = "https://api-us.faceplusplus.com/facepp/v3/detect"




$("#picture-submit").on('click', function () {

    var link = $("#facebook-link").val().trim()



    var parameters = {

        "api_key": "MQpH7ljShXOJ9zHrKdDM5C6o96A0Qsbp",


        "api_secret": "-9hs9__kJoKpcPpL9fEPWretNJDk40hf",

        "image_url": link,

        "return_attributes": "emotion"
    };



    $.ajax({
        url: queryUrl,
        method: "POST",
        data: parameters
    }).done(function (response) {
        console.log(response);
        var emotionLvls = response.faces[0].attributes.emotion;
        console.log(emotionLvls)
        console.log(emotionLvls.sadness)

        //We will display emotion text of whatever emotion is above 60%, with the rest of the analysis listed below
        if (emotionLvls.sadness > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.sadness + "% sad");
            $("#emot2").text("You are " + emotionLvls.anger + "% angry.");
            $("#emot3").text("You are " + emotionLvls.happiness + "% happy.");
            $("#emot4").text("You are " + emotionLvls.disgust + "% disgusted.");
            $("#emot5").text("You are " + emotionLvls.surprise + "% surprised.");
            $("#emot6").text("You are " + emotionLvls.neutral + "% neutral.");
            $("#emot7").text("You are " + emotionLvls.fear + "% fearful.");
        }
        else if (emotionLvls.fear > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.fear + "% sad.")
            $("#emot2").text("You are " + emotionLvls.anger + "% angry.");
            $("#emot3").text("You are " + emotionLvls.happiness + "% happy.");
            $("#emot4").text("You are " + emotionLvls.disgust + "% disgusted.");
            $("#emot5").text("You are " + emotionLvls.surprise + "% surprised.");
            $("#emot6").text("You are " + emotionLvls.neutral + "% neutral.");
            $("#emot7").text("You are " + emotionLvls.sadness + "% sad.");
        }
        else if (emotionLvls.anger > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.anger + "% angry.")
            $("#emot2").text("You are " + emotionLvls.sad + "% sad.");
            $("#emot3").text("You are " + emotionLvls.happiness + "% happy.");
            $("#emot4").text("You are " + emotionLvls.disgust + "% disgusted.");
            $("#emot5").text("You are " + emotionLvls.surprise + "% surprised.");
            $("#emot6").text("You are " + emotionLvls.neutral + "% neutral.");
            $("#emot7").text("You are " + emotionLvls.fear + "% fearful.");
        }
        else if (emotionLvls.disgust > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.disgust + "% angry.")
            $("#emot2").text("You are " + emotionLvls.anger + "% angry.");
            $("#emot3").text("You are " + emotionLvls.happiness + "% happy.");
            $("#emot4").text("You are " + emotionLvls.sad + "% sad.");
            $("#emot5").text("You are " + emotionLvls.surprise + "% surprised.");
            $("#emot6").text("You are " + emotionLvls.neutral + "% neutral.");
            $("#emot7").text("You are " + emotionLvls.fear + "% fearful.");
        }
        else if (emotionLvls.happiness > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.happiness + "% happy.")
            $("#emot2").text("You are " + emotionLvls.anger + "% angry.");
            $("#emot3").text("You are " + emotionLvls.sad + "% sad.");
            $("#emot4").text("You are " + emotionLvls.disgust + "% disgusted.");
            $("#emot5").text("You are " + emotionLvls.surprise + "% surprised.");
            $("#emot6").text("You are " + emotionLvls.neutral + "% neutral.");
            $("#emot7").text("You are " + emotionLvls.fear + "% fearful.");
        }
        else if (emotionLvls.neutral > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.neutral + "% neutral.")
            $("#emot2").text("You are " + emotionLvls.anger + "% angry.");
            $("#emot3").text("You are " + emotionLvls.happiness + "% happy.");
            $("#emot4").text("You are " + emotionLvls.disgust + "% disgusted.");
            $("#emot5").text("You are " + emotionLvls.surprise + "% surprised.");
            $("#emot6").text("You are " + emotionLvls.sad + "% sad.");
            $("#emot7").text("You are " + emotionLvls.fear + "% fearful.");
        }
        else if (emotionLvls.surprise > 60) {
            $("#emotionDetect").text("You are " + emotionLvls.surprise + "% neutral.")
            $("#emot2").text("You are " + emotionLvls.anger + "% angry.");
            $("#emot3").text("You are " + emotionLvls.happiness + "% happy.");
            $("#emot4").text("You are " + emotionLvls.disgust + "% disgusted.");
            $("#emot5").text("You are " + emotionLvls.sad + "% sad.");
            $("#emot6").text("You are " + emotionLvls.neutral + "% neutral.");
            $("#emot7").text("You are " + emotionLvls.fear + "% fearful.");
        };
    });


});





