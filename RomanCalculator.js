
function RomanCalculator() {

    var letters = { "I": { "value": 1, "next": 5 },
                    "V": { "value": 5, "next": 2 },
                    "X": { "value": 10, "next": 5 },
                    "L": { "value": 50, "next": 2 },
                    "C": { "value": 100, "next": 5 },
                    "D": { "value": 500, "next": 2 },
                    "M": { "value": 1000, "next": 5 } };
    
    var merge = function(firstRoman, secondRoman) {
        var result = "";

	var romanNumberMap = {};
        for(var letter in letters) {
            romanNumberMap[letter] = 0;
        }

        var firstId = firstRoman.length-1;
        var secondId = secondRoman.length-1;

        while(firstId >= 0 && secondId >= 0) {
          var firstRomanLetter = firstRoman[firstId];
          var secondRomanLetter = secondRoman[secondId];
          var firstRomanLetterValue = letters[firstRomanLetter].value;
          var secondRomanLetterValue = letters[secondRomanLetter].value;

          if(!firstRomanLetterValue) {
             throw "Invalid letter "+firstRomanLetterValue;
          }
          if(!secondRomanLetterValue) {
             throw "Invalid letter "+secondRomanLetterValue;
          }

          if (firstRomanLetterValue >= secondRomanLetterValue) {
              if ( firstRomanLetterValue == secondRomanLetterValue ) {
                  romanNumberMap[secondRomanLetter] += 1;
                  firstId--;
              }
              romanNumberMap[secondRomanLetter] += 1;
              secondId--;
          }
          else {
              romanNumberMap[firstRomanLetter] += 1;
              firstId--;
          }
        }

        var mapString = function(id, string) {
           for(var i=id; i >= 0; i--) {
	      var letter = string[i];
              romanNumberMap[letter] += 1;
           }
        }
        if(firstId >= 0) {
           mapString(firstId, firstRoman);
        }
        if(secondId >= 0) {
           mapString(secondId, secondRoman);
        }

        return romanNumberMap;
    }

    var regroup = function(romanNumberMap) {
        result = "";
        var report=false; 
        for(var letter in letters) {
           var value = romanNumberMap[letter];
           var next = letters[letter].next;
          
           if(report) {
              report = false;
              value++;
           }

           if(value >= next) {
              value -= next;
              report = true;
           }

           for(var i=0; i< value; i++) {
             result = letter + result;
           }
        }
        return result;
    }

    this.add = function(firstRoman, secondRoman) {
        return regroup(merge(firstRoman, secondRoman));
    }
}

RomanCalculator.instance = new RomanCalculator();

