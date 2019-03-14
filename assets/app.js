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

  var database = firebase.database();

  
  // Variables
  var trainName = "";
  var destination = "";
  var startTime = "";
  var frequency = 0;


  // Current Time
  function currentTime() {
      var current = moment().format('LT');
      $("#current-time").html(current);
      setTimeout(currentTime, 1000);
  };

  currentTime();

  

        