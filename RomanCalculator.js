
function RomanCalculator() {

    var letters = { "I": { "next": "V", "regroupAt": 5 },
                    "V": { "next": "X", "regroupAt": 2 },
                    "X": { "next": "L", "regroupAt": 5 },
                    "L": { "next": "C", "regroupAt": 2 },
                    "C": { "next": "D", "regroupAt": 5 },
                    "D": { "next": "M", "regroupAt": 2 },
                    "M": { "regroupAt": 5 } };
    
    var merge = function(firstRoman, secondRoman) {
        var result = "";

	var romanNumberMap = {};
        for(var letter in letters) {
            romanNumberMap[letter] = 0;
        }

        var mergeRoman = function(roman) {
           for(var i=0; i<roman.length ; i++) {
               var letter = roman[i];
               var nextLetter = roman[(i==roman.length-1)?roman.length-1:i+1];
               if(letters[letter] == undefined) {
		   throw new Error("Invalid letter "+letter);
               }

               var next = letters[letter].next;
               if(nextLetter == next) {
                   romanNumberMap[letter] += 4;
                   i++;
                   continue;
               }

               if(next && nextLetter == letters[next].next) {
                   romanNumberMap[letter] += 4;
                   romanNumberMap[next] += 1;
                   i += 2;
                   continue;
               }
               romanNumberMap[letter] += 1;
           }
        };

        mergeRoman(firstRoman);
        mergeRoman(secondRoman);
        return romanNumberMap;
    }

    var regroup = function(romanNumberMap) {
        result = "";
        var report=false;
        for(var letter in letters) {
           var value = romanNumberMap[letter];
           var regroupAt = letters[letter].regroupAt;
           var next = letters[letter].next;
          
           if(report) {
              report = false;
              value++;
           }

           if(regroupAt == 5 && next && letters[next] && letters[next].next && value == 4 && romanNumberMap[next] > 0) {
              result = letter + letters[next].next + result;
              romanNumberMap[next] -= 1;
              continue;
           }

           if(regroupAt == 5 && next && value == 4 ) {
              result = letter + next + result;
              continue; 
           }
              
           if(value >= regroupAt) {
              value -= regroupAt;
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

