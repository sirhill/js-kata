
function RomanCalculator() {

    var letters = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    
    var nextRomanLetter = function(letterValue) {
        switch(letterValue) {
            case 5: return "X";
            case 50: return "C";
            case 500: return "M";

            default: return undefined;
        }
    }

    var merge = function(firstRoman, secondRoman) {
        var result = "";

        var firstId = firstRoman.length-1;
        var secondId = secondRoman.length-1;

        while(firstId >= 0 && secondId >= 0) {
          var firstRomanLetter = firstRoman[firstId];
          var secondRomanLetter = secondRoman[secondId];
          var firstRomanLetterValue = letters[firstRomanLetter];
          var secondRomanLetterValue = letters[secondRomanLetter];

          if (firstRomanLetterValue >= secondRomanLetterValue) {
              if ( firstRomanLetterValue == secondRomanLetterValue ) {
                  var nextRoman = nextRomanLetter(firstRomanLetterValue);
                  if(nextRoman) {
                     result = nextRoman + result;
                  }
                  else {
                     result = firstRomanLetter + secondRomanLetter + result;
                  }
                  firstId--;
                  secondId--;
              }
              else {
                  result = secondRomanLetter + result;
                  secondId--;
              }
          }
          else {
              result = firstRomanLetter + result;
              firstId--;
          }
        }

        if(firstId >= 0) {
           result = firstRoman.substring(0,firstId+1) + result;
        }
        if(secondId >= 0) {
           result = secondRoman.substring(0,secondId+1) + result;
        }

        return result;
    }

    var regroup = function(romanNumber) {
        return romanNumber;
    }

    this.add = function(firstRoman, secondRoman) {
        return regroup(merge(firstRoman, secondRoman));
    }
}

RomanCalculator.instance = new RomanCalculator();

