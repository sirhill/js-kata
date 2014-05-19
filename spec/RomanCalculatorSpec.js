describe("RomanNumberCalculator add", function() {
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

   it("should return XXII for XI+XI", function() {
       expect(RomanCalculator.instance.add("XI", "XI")).toBe("XXII");
   });

   it("should return V for IV+I", function() {
       expect(RomanCalculator.instance.add("IV", "I")).toBe("V");
   });
});
