const TOTAL_DIVS = 9;

$(document).ready(function() {

  // When you click the gif
  $("#trump").click(trumpClicked);

});


function trumpClicked () {
    // It create more a clone of the same div
    for (var i = 0; i < TOTAL_DIVS; i++) {
      var div = $('<div id="trump"></div>');
      div.click(trumpClicked);
      $('body').append(div);
    }
}
