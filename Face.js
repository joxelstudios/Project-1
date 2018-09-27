var queryUrl = "https://api-us.faceplusplus.com/facepp/v3/detect"

var parameters = {
// -F "api_key=<api_key>" \
    "api_key": "MQpH7ljShXOJ9zHrKdDM5C6o96A0Qsbp",
    
// -F "api_secret=<api_secret>" \
    "api_secret": "-9hs9__kJoKpcPpL9fEPWretNJDk40hf",
// -F "image_file=@image_file.jpg" \
    "image_url": "https://i.imgflip.com/vh6to.jpg",
// -F "return_landmark=1" \
    // "return_landmark": "1",
// -F "return_attributes=gender,age"
    "return_attributes": "emotion"
};


$.ajax({
    url: queryUrl,
    method: "POST",
    data: parameters
}).done(function(response){
    console.log(response);
})