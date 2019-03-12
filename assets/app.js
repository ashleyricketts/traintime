// Initialize Firebase
var config = {
    apiKey: "AIzaSyARpMdCOpVJw71fB85PUXK71Wp34DmTiMs",
    authDomain: "traintime-24413.firebaseapp.com",
    databaseURL: "https://traintime-24413.firebaseio.com",
    projectId: "traintime-24413",
    storageBucket: "traintime-24413.appspot.com",
    messagingSenderId: "857567793358"
  };

  firebase.initializeApp(config);

  var database = firbase.database();

  $("#add-train-btn").on("click", function(event){
        event.preventDefault();

        var trnName = $("#train-name-input").val().trim();
        var trnDestination = 
        var trntime = 
        var trnFrequency = 


  })
