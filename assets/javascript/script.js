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
var config = {
    apiKey: "AIzaSyAnK5jEw1jkRK7o-gghAtO18TZB33fJAtg",
    authDomain: "fir-timesheet-33d91.firebaseapp.com",
    databaseURL: "https://fir-timesheet-33d91.firebaseio.com",
    projectId: "fir-timesheet-33d91",
    storageBucket: "fir-timesheet-33d91.appspot.com",
    messagingSenderId: "164768456674"
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
    role = $("#role-input").val().trim();
    rate = $("#rate-input").val().trim();
    date = $("#date-input").val().trim();

    database.ref().push({
        name: name,
        role: role,
        rate: rate,
        date: date,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
    //console.log(dataAdded);
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

//dataRef.ref().ordrByChile("dateAdded").limitToLast(1).on("child_added",function(snapshot)