
// -------------------------------------------------------------
function Letter(char) {
  this.char = char;
  this.guessedYet = false;
}

// -------------------------------------------------------------
Letter.prototype.displayChar = function(){
  if (this.guessedYet === true){
    console.log("You're getting there! Good job!");
    return this.char;
  }
  else {
    console.log("Keep on guessing!");
    return "_";
  }
}

// -------------------------------------------------------------
Letter.prototype.checkLetter = function(charArg){
  if(this.char === charArg) {
    this.guessedYet = true;
  }
}

// -------------------------------------------------------------
module.export = Letter;
