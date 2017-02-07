// This file defines a variable with our dialog in it
//
// Each element in the dialog array is an object with two properties:
//
//    'name' contains the name of the person saying the line
//     and conveniently translates to the name of the CSS id for that
//     character.
//
//    'line' contains the line of dialog for them to speak
//
// The elements are in the array IN THE ORDER that they should be spoken
// by the characters.

var dialog = [
  {
    name: "vincent",
    line: "You know what the funniest thing about Europe is?",
  },
  {
    name: "jules",
    line: "What?"
  },
  {
    name: "vincent",
    line: "It's the little differences. A lotta the same shit we got here, they got there, but there they're a little different."
  },
  {
    name: "jules",
    line: "Examples?"
  },
  {
    name: "vincent",
    line: "Well, in Amsterdam, you can buy beer in a movie theatre. And I don't mean in a paper cup either. They give you a glass of beer, like in a bar. In Paris, you can buy beer at MacDonald's. Also, you know what they call a Quarter Pounder with Cheese in Paris?"
  },
  {
    name: "jules",
    line: "They don't call it a Quarter Pounder with Cheese?."
  },
  {
    name: "vincent",
    line: "No, they got the metric system there, they wouldn't know what the fuck a Quarter Pounder is."
  },
  {
    name: "jules",
    line: "What'd they call it?"
  },
  {
    name: "vincent",
    line: "Royale with Cheese."
  },
  {
    name: "jules",
    line: "Royale with Cheese. What'd they call a Big Mac?"
  },
  {
    name: "vincent",
    line: "Big Mac's a Big Mac, but they call it Le Big Mac."
  }

];
