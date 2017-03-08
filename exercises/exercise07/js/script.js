$(document).ready(function(){

  // Create a ScrollMagic Controller so we can use the library
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 5000
  });

//set tween to affect the background color
  scene.setTween("body", 0.5, {
    "backgroundColor": "white",
  });

  scene.triggerHook(0.5);

  //help figure out where the tween start
  scene.addIndicators();

  //add to the controller
  scene.addTo(controller);


  $('.line').each(function (index) {

    // First we need to give the element a unique id attribute
    // so we can target it specifically with ScrollMagic
    $(this).attr({
    id: "line" + index
    });

    // Makes a CSS version
    var lineId = "#line" + index;

    // Now creating a scene for the text
    var text = new ScrollMagic.Scene({
      triggerElement: lineId,
      duration: 1000,
    });

    // Set up a tween to change opacity up to 1 during the tween
    text.setTween(lineId, 0.5, {
      opacity: '1',
    });

    // Also set up a class toggle so that the element is visible
    // while being scrolled, but invisible otherwise
    text.setClassToggle(lineId,"visible");

    // Add the text to the controller
    text.addTo(controller);
  });

});
