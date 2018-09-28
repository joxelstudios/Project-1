var queryUrl = "https://api-us.faceplusplus.com/facepp/v3/detect"

var parameters = {

    "api_key": "MQpH7ljShXOJ9zHrKdDM5C6o96A0Qsbp",
    

    "api_secret": "-9hs9__kJoKpcPpL9fEPWretNJDk40hf",

    "image_url": "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/shutterstock_114522091.jpg?itok=a7EVvRFs",

    "return_attributes": "emotion"
};


$.ajax({
    url: queryUrl,
    method: "POST",
    data: parameters
}).done(function(response){
    console.log(response);
    var emotionLvls = response.faces[0].attributes.emotion;
    console.log(emotionLvls)
    console.log(emotionLvls.sadness)

    if(emotionLvls.sadness>60){
        //We will display emotion text of whatever emotion is above 60%
        $("#displaytext").text("You are " + emotionLvls.sadness +"% sad. :(");
    }
    else if(emotionLvls.fear>60){
        $("#displaytext").text("You are "+emotionLvls.fear+ "% sad.")
    } 
    else if(emotionLvls.anger>60){
        $("#displaytext").text("You are "+emotionLvls.anger+"% angry.")
    }
    else if(emotionLvls.disgust>60){
        $("#displaytext").text("You are "+emotionLvls.disgust+"% angry.")
    }
    else if(emotionLvls.happiness>60){
        $("#displaytext").text("You are "+emotionLvls.happiness+ "% happy.")
    }
    else if(emotionLvls.neutral>60){
        $("#displaytext").text("You are "+emotionLvls.neutral+ "% neutral.")
    }
    else if(emotionLvls.surprise>60){
        $("#displaytext").text("You are "+emotionLvls.surprise+ "% neutral.")
    };

    
});










