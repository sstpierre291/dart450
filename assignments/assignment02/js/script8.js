$(document).ready(function(){

  // Create a ScrollMagic Controller to handle the scrolling
  var controller = new ScrollMagic.Controller();

  // Create a new scene based on the trigger div
  // Use a duration so that the animations are tied to scroll speed
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 1000
  });

  //set up an animation so the button will appear on scrolling
  scene.setTween("#clean", 0.5, {
    opacity: "1",
  });

  scene.triggerHook(0);

  // Add the debugging indicators so we can see what's happening
  //scene.addIndicators();


  // Add our scene to the controller
  scene.addTo(controller);

  $("#nothing").click(function(){
    responsiveVoice.speak('Steve, Look down', "UK English Male");
  });

});
