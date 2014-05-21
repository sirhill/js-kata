describe("RomanNumberCalculator add", function() {
   it("should return II for I+I", function() {
       expect(RomanCalculator.instance.add("I", "I")).toBe("II");
   });

   it("should return XI for X+I", function() {
       expect(RomanCalculator.instance.add("X", "I")).toBe("XI");
   });

   it("should return XI for I+X", function() {
       expect(RomanCalculator.instance.add("I", "X")).toBe("XI");
   });

   it("should return X for V+V", function() {
       expect(RomanCalculator.instance.add("V", "V")).toBe("X");
   });

   it("should return C for L+L", function() {
       expect(RomanCalculator.instance.add("L", "L")).toBe("C");
   });

   it("should return M for D+D", function() {
       expect(RomanCalculator.instance.add("D", "D")).toBe("M");
   });

   it("should return XXII for XX+II", function() {
       expect(RomanCalculator.instance.add("XX","II")).toBe("XXII");
   });

   it("should return XXII for XXI+I", function() {
       expect(RomanCalculator.instance.add("XXI", "I")).toBe("XXII");
   });

   it("should return XXII for I+XXI", function() {
       expect(RomanCalculator.instance.add("I","XXI")).toBe("XXII");
   });

   it("should return XXII for X+XII", function() {
       expect(RomanCalculator.instance.add("X","XII")).toBe("XXII");
   });

   it("should return XXII for XI+XI", function() {
       expect(RomanCalculator.instance.add("XI", "XI")).toBe("XXII");
   });

   it("should return V for II+III", function() {
       expect(RomanCalculator.instance.add("II", "III")).toBe("V");
   });

   it("should return X for VII+III", function() {
       expect(RomanCalculator.instance.add("VII","III")).toBe("X");
   });

   it("should return X for VIII+II", function() {
       expect(RomanCalculator.instance.add("VIII","II")).toBe("X");
   });

   it("should return V for IV+I", function() {
       expect(RomanCalculator.instance.add("IV", "I")).toBe("V");
   });

   it("should return VI for IV+II", function() {
       expect(RomanCalculator.instance.add("IV", "II")).toBe("VI");
   });

   it("should return X for IV+VI", function() {
       expect(RomanCalculator.instance.add("IV", "VI")).toBe("X");
   });

   it("should return X for IX+I", function() {
       expect(RomanCalculator.instance.add("IX", "I")).toBe("X");
   });

   it("should return IV for II+II", function() {
       expect(RomanCalculator.instance.add("II", "II")).toBe("IV");
   });

   it("should return IX for V+IV", function() {
       expect(RomanCalculator.instance.add("V", "IV")).toBe("IX");
   });

   it("should return MCDXIX for MCD+XIX", function() {
       expect(RomanCalculator.instance.add("MCD", "XIX")).toBe("MCDXIX");
   });

   it("should return XIII for IX+IV", function() {
       expect(RomanCalculator.instance.add("IX","IV")).toBe("XIII");
   });
});
