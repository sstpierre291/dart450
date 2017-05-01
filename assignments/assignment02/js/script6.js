$(document).ready(function(){

  // on click on the "wrong button" another button (useless) will be created.
  $("#locked").click(function(){
    voice1()
    createbutton()
  });

  //we add naration to our new button.
  $("#down").click(function(){
    responsiveVoice.speak('This is out of the question, Steve', "UK English Male");
  });
});


//good old narrator.
function voice1() {
  responsiveVoice.speak(getRandomElement(lines1), "UK English Male");
};

//lines that the narrator will tell Steve (you) when you try to click on the "Locked door" button.
var lines1 = [
  'Steve, put your muscle into it', 'Come on, Steve!', 'Steve! Steve! Steve!',
  'You almost have it steve!',];

//Random Element for the voice
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//Now, we create another button in the center.
function createbutton() {
  if ($('#down').length == 0) {
  //the css proprieties for the third button.
  var button = $('<button id="down" class="button3">downstairs</button>');
  //we had the button to the body.
  $('body').append(button);
}
};
