
function RomanConverter() {

    this.convert = function(value) {
        var result = "";

        var letters = [ { roman: "I", arabic: 1 },
                        { roman: "IV", arabic : 4 },
                        { roman: "V", arabic: 5 },
                        { roman: "IX", arabic: 9 },
                        { roman: "X", arabic: 10 },
                        { roman: "XL", arabic: 40 },
                        { roman: "L", arabic: 50 },
                        { roman: "XC", arabic: 90 },
                        { roman: "C", arabic: 100 },
                        { roman: "CD", arabic: 400 },
                        { roman: "D", arabic: 500 },
                        { roman: "CM", arabic: 900 },
                        { roman: "M", arabic: 1000 } ];
       
        var i = letters.length;

        while(i > 0) {
            var letter = letters[--i];

            while(value >= letter.arabic) {
                result += letter.roman;
                value -= letter.arabic;
            }
        }

        return result;
    }
}

RomanConverter.instance = new RomanConverter();

