//website: https://github.com/dariusk/corpora


$(document).ready(function() {


  //Load the JSON data to generate word
  $.getJSON('data/data.json', gotData)
});

  //We had the gotData functioj
  function gotData (data) {

    //then we had the variables

    //we add random noun.
    var subject = getRandomElement(data.noun);
    $('#subject').text(subject);

    //we do the same for the adverb and the verb.
    var adjective = getRandomElement(data.adjs);
    //we will add articles in front of the adverb
    var articleAdjective = getArticle(adjective);
    $('#adjective').text(articleAdjective + " " + adjective);


    var verb = getRandomElement(data.verb);
    console.log(verb);
    $('#verb').text(verb.present);

    var complement = getRandomElement(data.noun);
    $('#complement').text('the ' + complement);
  }

  //add the article generator
  function getArticle(string) {
    var article;

    //we want the first letter to be uppercase as they begin the sentence
    var firstLetter = string.charAt(0).toUpperCase();

    //makes sure we have "an" when we have a vowel
    if ("aeiou".indexOf(firstLetter) != -1) {
      // if it does, we have a vowel...
      article = "An"
    }
    else {
      article = "A"
    }
    return article;
  }

  //makes sure everything would be random, hopefully the sentences won't make any sense.
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
