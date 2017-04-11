$(document).ready(function(){

 //on hover they will trigger the functions
  $("#downstairs").hover(function(){
    voice();
    position();

  });
});


//function to trigger the voice
function voice() {
  responsiveVoice.speak(getRandomElement(lines), "UK English Male");
};

//lines that the narrator will tell Steve (you) when you try to click on the "downstars" button.
var lines = [
  'No, Steve', 'Steve, downstairs is such a cliche', 'people always choose to go downstairs, Steve',
  'Steve... come on.', 'not downstairs, steve',
];

//Random Element for the voice
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//random position of the buttton
function position() {
  var x = Math.random() * $(window).width();
  var y = Math.random() * $(window).height();
  $('#downstairs').offset({
    top: y,
    left: x
  });
}
