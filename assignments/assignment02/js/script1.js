$(document).ready(function(){

//first page.

  $("#next").hide();
  //A basic javascript to add a text you click on the button submit.
  // No matter what name you type in your name would be Steve because I decide so.
  $("#submit").click(function(){
    $("#yourname").text('I have decided that your name should be Steve!');
    $("#next").show();
  });
});
