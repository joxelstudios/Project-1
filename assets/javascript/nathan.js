  var config = {
    apiKey: "AIzaSyAOtmF2KkZ4KTb13NI7hTuvee9C5bUd79s",
    authDomain: "project-1-33b60.firebaseapp.com",
    databaseURL: "https://project-1-33b60.firebaseio.com",
    projectId: "project-1-33b60",
    storageBucket: "",
    messagingSenderId: "560777779311"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

 
  // var connectionsRef = database.ref("/connections");
  
 
  // var connectedRef = database.ref(".info/connected");
  

  // connectedRef.on("value", function(snap) {
  
    
  //   if (snap.val()) {

  //     var con = connectionsRef.push(true);
      
  //     con.onDisconnect().remove();
  //   }
  // });
  

  var name = "";
  var image = "";

  // Capture Button Click
  $("#add-user").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    image = $("#image-input").val();

    // Code for handling the push
    database.ref().push({
      name: name,
      image: image,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.age);
    console.log(sv.comment);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.email);
    $("#age-display").text(sv.age);
    $("#comment-display").text(sv.comment);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
