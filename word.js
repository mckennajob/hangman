
// -------------------------------------------------------------
var letter = require("./letter.js");

// An array of new Letter objects representing the letters of the underlying word
// -------------------------------------------------------------
function Word(word) {
  this.word = word.split("");
  this.something = ("?");
  this.somethingelse = word;

}

var hippo = new Word('hippopotamus');


hippo.something;
hippo.somethingelse;


console.log(hippo);


// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// -------------------------------------------------------------



// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
// -------------------------------------------------------------




// --MORE NEW WORDS---------------------------------------------
// var plat = new Word('platypus');
// var sal = new Word('salamander');
// var aard = new Word('aardvark');
// var porc = new Word('porcupine');
// console.log(plat);
// console.log(sal);
// console.log(aard);
// console.log(porc);

// --NEW LETTERS SPLIT------------------------------------------
// var hippopotamus = new Letter('hippopotamus'.split(""));
// console.log(hippopotamus);
//
// var platypus = new Letter('platypus'.split(""));
// console.log(platypus);
//
// var salamander = new Letter('salamander'.split(""));
// console.log(salamander);
//
// var aardvark = new Letter('aardvark'.split(""));
// console.log(aardvark);
//
// var porcupine = new Letter('porcupine'.split(""));
// console.log(porcupine);
