const TOTAL_DIVS = 2;
const INTERVAL = 5000;

$(document).ready(function() {


//create shapes for the justice button
  $("#wisdom").click(CreateWisdom);
  $("#wisdom").click(function() {
    responsiveVoice.speak("Cannot be reconcile with wisdom, justice and love.","UK English Male");
  });

//create shapes for the justice button
  $("#justice").click(CreateJustice);
  $("#justice").click(function() {
    responsiveVoice.speak("Cannot be reconcile with wisdom, justice and love.","UK English Male");
  });

//create shapes for the love button
  $("#love").click(CreateLove);
  $("#love").click(function() {
    responsiveVoice.speak("Cannot be reconcile with wisdom, justice and love.","UK English Male");
  });


});

function CreateWisdom () {
  var wisdomShapes = new Array(TOTAL_DIVS);
    for (var i = 0; i <TOTAL_DIVS; i++) {
      var div = $('<div class="shapewisdom"></div>');
      var duration = Math.random() * 10;
      div.css({
        animationDuration: duration + "s"
      });
      $('body').append(div);
      wisdomShapes[i] = div;
    };

};

function CreateJustice () {
  var justiceShapes = new Array(TOTAL_DIVS);
    for (var i = 0; i <TOTAL_DIVS; i++) {
      var div = $('<div class="shapejustice"></div>');
      $('body').append(div);
      justiceShapes[i] = div;
    };

};

function CreateLove () {
  var loveShapes = new Array(TOTAL_DIVS);
    for (var i = 0; i <TOTAL_DIVS; i++) {
      var div = $('<div class="shapelove"></div>');
      $('body').append(div);
      loveShapes[i] = div;
    };

};
