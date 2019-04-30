// name-input
// role-input
// date-input
// rate-input
// submit
// name-display
// role-display
// date-display
// rate-display

// Initialize Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB7QxmTZdkAVZQIQVBDuDAE9sGkewF5_q4",
    authDomain: "trainhomework-26fdb.firebaseapp.com",
    databaseURL: "https://trainhomework-26fdb.firebaseio.com",
    projectId: "trainhomework-26fdb",
    storageBucket: "trainhomework-26fdb.appspot.com",
    messagingSenderId: "569565210312"
  };
  firebase.initializeApp(config);
var database = firebase.database();
// Initial Values
var name = "";
var role = "";
var rate = 0;
var date = "";

// Capture Button Click
$("#submit").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    rate = $("#rate-input").val().trim();

    var newTrain = {
        name: name,
        destination: destination,
        frequency: frequency,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }


    datebase.ref().push(newTrain)
    //synatx error somewhere
    //clear inputs
    $("#name-input").val("")
    $("#destination-input").val("").trim()
    $("frequency-input").val("")
    $("#rate-input").val("")
    });

});

database.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapsho
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    var name = childSnapshot.val().name
    var destination = childSnapshot.val().destination
    var frequency = childSnapshot.val().frequency
    var firstTime = childSnapshot.val().firstTime

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

var newEntries = $("<tr").append(
    $("<td>").text(name)
    $("<td>").text(destination)
    $("<td>").text(frequency)
    $("<td>").text(nextTrain)
    $("<td>").text(tMinutesTillTrain)
);

$("tbody").append(newRow);

})

setInterval(function() {
    window.location.reload
}