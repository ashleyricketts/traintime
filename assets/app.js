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

  // values from form 
  $("#add-train-btn").on("click", function(event){
          event.preventDefault();

          var trainName = $("#train-name-input").val().trim();
          var destination = $("#destination-input").val().trim();
          var startTime = $("#time-input").val().trim();
          var frequency = $("#frequency-input").val().trim();

          database.ref().push({
                  trainName: trainName,
                  destination: destination,
                  startTime: startTime,
                  frequency: frequency,
          })

          //clear form
          $("#train-name-input").val("");
          $("#destination-input").val("");
          $("#time-input").val("");
          $("#frequency-input").val("");
  });


  // insert form values to table 
  
  database.ref().on("child_added", function(childSnapshot) {
        var startTimeConverted = moment(childSnapshot.val().startTime, "hh:mm").subtract(1, "years");
        var timeDiff = moment().diff(moment(startTimeConverted), "minutes");
        var timeRemain = timeDiff % childSnapshot.val().frequency;
        var minToArrival = childSnapshot.val().frequency - timeRemain;
        var nextTrain = moment().add(minToArrival, "minutes");
        var key = childSnapshot.key;
  
    var newrow = $("<tr>");
        newrow.append($("<td>" + childSnapshot.val().trainName + "</td>"));
        newrow.append($("<td>" + childSnapshot.val().destination + "</td>"));
        newrow.append($("<td class='text-center'>" + childSnapshot.val().frequency + "</td>"));
        newrow.append($("<td class='text-center'>" + moment(nextTrain).format("LT") + "</td>"));
        newrow.append($("<td class='text-center'>" + minToArrival + "</td>"));
  
    if (minToArrival < 6) {
      newrow.addClass("info");
    }
  
    $("#train-table-rows").append(newrow);
  
  });


 