
function RomanCalculator() {

    var letters = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    
    var nextRomanLetter = function(letterValue) {
        switch(letterValue) {
            case 5: return "X";
            case 50: return "C";
            case 500: return "M";

            default: return "";
        }
    }

    this.add = function(firstRoman, secondRoman) {
        var result = "";

        var firstId = firstRoman.length;
        var secondId = secondRoman.length;

        while(firstId > 0 && secondId > 0) {
          var firstRomanLetter = firstRoman[--firstId];
          var secondRomanLetter = secondRoman[--secondId];
          var firstRomanLetterValue = letters[firstRomanLetter];
          var secondRomanLetterValue = letters[secondRomanLetter];

          console.log(firstRomanLetter + " + " + secondRomanLetter );
          if (firstRomanLetterValue >= secondRomanLetterValue) {
              if ( firstRomanLetterValue == secondRomanLetterValue ) {
                  result += nextRomanLetter(firstRomanLetterValue);
              }
              else {
                  result += firstRomanLetter + secondRomanLetter;
              }
          }
          else {
              result += secondRomanLetter + firstRomanLetter;
          }
        }
        return result;
    }
}

RomanCalculator.instance = new RomanCalculator();

