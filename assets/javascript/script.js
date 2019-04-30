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

    database.ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP


    //synatx error somewhere
    $("#name-input").val("")
    $("#destination-input").val().trim()
    $("frequency-input").val(""
    $("#rate-input").val("")
    
    });
    
    

});
database.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().rate);
    console.log(snapshot.val().date);
    //  console.log(snapshot).val().dateAdded;
    var newRow = $("<tr>");
    var namedata = $("<td>").text(snapshot.val().name);
    var roledata = $("<td>").text(snapshot.val().role);
    var ratedata = $("<td>").text(snapshot.val().rate);
    var nothing = $("<td>");
    var datedata = $("<td>").text(snapshot.val().date);
    newRow.append(namedata, roledata, ratedata, nothing, datedata);
    $("tbody").append(newRow);

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});



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