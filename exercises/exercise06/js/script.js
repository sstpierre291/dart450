// How often to check for whether we've lost the face...
const INTERVAL = 100;

// Time allowed for the page to react we you are not in front of your computer.
const MAX_TIME_SINCE_FACE = 1000;

// Track how long it has been since the page has seen a face,
// start on a high value so it assumes it hasn't seen one for a long time
var timeSinceFace = 1000000;

var voice = 'UK English Male';

// commentary of the page when you are not in front of it.
var outsideSurveillance = [
  "We are still watching you wherever you are!",
  "You can't escape us.",
  "We know where you're going",
  "You really think you can escape us?",
  "Don't forget your keys this time.",
  "Are you taking the bus? Who am I kidding we already know.",
];

// commentary of the page when you are in front of it.
var insideSurveillance = [
  "Here you are again.",
  "Which site will you visit? Oh true! We already know!",
  "Oh it's started to be boring starring at an empty chair.",
  "We have a new guy so, yes, don't change clothes in front of your webcam.",
  "You know that site you've been yesterday at 6:37pm? it's nasty!.",
  "Don't you go downloading illegal stuff again, we let you off the hook last time.",
];

var saidInside = false;
var saidOutside = false;

$(document).ready(function(){

  // Do the getUserMedia stuff
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {      
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }

function handleVideo(stream) {
  // Get the URL of the stream
  var streamURL = window.URL.createObjectURL(stream);

  // Get the URL of the stream
  $('#webcam').attr({
    src: streamURL
  });

  // this code will track color.
  startTracking();
}

// If there's a problem with getting the webcam, this will get called.
function videoError(e) {
  $('body').css({
    'background-color': 'red'
  })
}

// This is the tracking of the face.
function startTracking() {

  var faceTracker = new tracking.ObjectTracker(['face']);

  faceTracker.on('track', handleTrackingEvent);

  tracking.track('#webcam', faceTracker);

  //This call the interval for the page to be threating you when you leave.
  setInterval(NoEscape,INTERVAL);
}

  //Called every INTERVAL
  function NoEscape () {
    // Update our variable tracking how long it's been since we saw a face...
    timeSinceFace += 100;

    if (timeSinceFace > MAX_TIME_SINCE_FACE && saidOutside == false) {
      // Say a random string from our outside lines
      responsiveVoice.speak(getRandomString(outsideSurveillance),voice);
      saidOutside = true;
      saidInside = false;
    }
  }

  // Called every frame of video that detection is running
  function handleTrackingEvent (event) {
    // Check if anything was tracked
    if (event.data.length === 0) {}

    //If a face is detected
    else {
      // Reset the time since we saw a face to 0
      timeSinceFace = 0;
      //speak an inside surveillance line.
      if (saidInside == false) {
        responsiveVoice.speak(getRandomString(insideSurveillance),voice);
        saidOutside = false;
        saidInside = true;
      }
    }
  }

  //randomoize the lines.
  function getRandomString(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
});
