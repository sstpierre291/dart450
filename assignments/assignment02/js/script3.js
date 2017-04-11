$(document).ready(function(){


  //If you want to go home, the button will disapear and the narrator would get mad at you for trying.
  $("#home").click(function(){
    $("#home").hide();
    responsiveVoice.speak("Oh come on, Steve! Just go inside you Chicken Shit!", "UK English Male");
  });
});
