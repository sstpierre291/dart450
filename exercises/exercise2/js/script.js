/*

Counter
Pippin Barr

The code here sets an interval to run code repeatedly
which updates the text in a div on the page with the
value of a counter variable;

*/

$(document).ready(function() {
  var script1 = "What'd they call it?";
  var script2 = "Royal with cheese!";

  var interval = 1000;
  var interval2 = 3000;
   // How often to update the counter (millis)

  // We want to update the counter each interval, so we use the
  // built in setInterval function, which calls a function
  // over and over again at a set interval
  //
  // Documentation here:
  // http://www.w3schools.com/jsref/met_win_setinterval.asp

  setInterval(function () {

    $("#counter").text(script1);
  },interval);

  setInterval(function () {

    $("#counter").text(script2);
    },interval2);


});
