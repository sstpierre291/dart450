$(document).ready(function(){

    $('#title').blast({
      delimiter: 'character'
    }).hover(function () {

      $(this).text(getRandomElement(RandomLetter));

    });






});

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var RandomLetter = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];
