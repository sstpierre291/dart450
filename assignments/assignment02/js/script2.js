$(document).ready(function(){

  //* In that script the only thing the button "right" do is for the narrator to tell you to go left.*//
  $("#right").click(function(){
    responsiveVoice.speak("I actually want you to go left, Steve.", "UK English Male");
  });

});
