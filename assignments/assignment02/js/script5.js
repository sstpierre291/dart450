$(document).ready(function(){

 //Trigger the function on click
  $("#door").click(function(){
    voice();
    createbutton();
  });

});


//function to trigger the voice
function voice() {
  responsiveVoice.speak(getRandomElement(lines), "UK English Male");
};

//lines that the narrator will tell Steve (you) when you try to click on the "the door" button.
var lines = [
  'Steve, Dont!', 'Do you have a death wish,steve', 'Are you mad, you will die, Steve!',
  'Arent you listening, Steve, killer door!', 'No Steve! I like you I dont want you to die',
];

//Random Element for the voice
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//this function will spam buttons when you click on them.
function createbutton() {
  //this variable is the number of button created.
  var newbutton = new Array (TOTAL_DIVS);
   for (var i = 0; i<TOTAL_DIVS; i++) {
     //adding the new button.
     var button = $('<button id="door" class="buttoncopy">the door</button>');
     $('body').append(button);
     newbutton[i] = button;
   };
};

//will create 3 new buttons after each click.
const TOTAL_DIVS = 3;
