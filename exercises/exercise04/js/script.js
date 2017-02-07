

// How long to wait between showing new lines
const LINE_DELAY = 5000;

// An index into the array of dialog, pointing to the current line
var currentLine = 0;

$(document).ready(function() {

  // When the document is ready, show the first line
  $(".button").click(showLine);

});

function showLine () {

  // Set both divs to be blank
  // $('#vincent,#jules').text('');


  // Get the name of the current speaker
  var speaker = dialog[currentLine].name

  // Get the line they should speak
  var line = dialog[currentLine].line

  // Set the appropriate div to have the line in it
  $('#' + speaker).text(line);

  $('#' + speaker).animate({
    opacity: 1
  },1000);

  setTimeout(function () {
    $('#' + speaker).animate({
      opacity: 0
    },1000);
  },LINE_DELAY);

  // Increase our index into the array by one to advance the dialog
  currentLine++;

  // Check if there are still lines remaining in the array of dialog
  if (currentLine < dialog.length) {
    // If so, set another timeout to say the next line
    setTimeout(showLine,LINE_DELAY);
  }

}
