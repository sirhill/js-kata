describe("RomanNumberConverter", function() {
   it("should return I for 1", function() {
      expect(RomanConverter.instance.convert(1)).toBe("I");
   });

   it("should return II for 2", function() {
       expect(RomanConverter.instance.convert(2)).toBe("II");
   });

   it("should return III for 3", function() {
       expect(RomanConverter.instance.convert(3)).toBe("III");
   });

   it("should return IV for 4", function() {
       expect(RomanConverter.instance.convert(4)).toBe("IV");
   });

   it("should return V for 5", function() {
       expect(RomanConverter.instance.convert(5)).toBe("V");
   });

   it("should return VI for 6", function() {
       expect(RomanConverter.instance.convert(6)).toBe("VI");
   });

   it("should return VII for 7", function() {
       expect(RomanConverter.instance.convert(7)).toBe("VII");
   });

   it("should return VIII for 8", function() {
       expect(RomanConverter.instance.convert(8)).toBe("VIII");
   });

   it("should return IX for 9", function() {
       expect(RomanConverter.instance.convert(9)).toBe("IX");
   });

   it("should return X for 10", function() {
       expect(RomanConverter.instance.convert(10)).toBe("X");
   });

   it("should return XL for 40", function() {
       expect(RomanConverter.instance.convert(40)).toBe("XL");
   });

   it("should return L for 50", function() {
       expect(RomanConverter.instance.convert(50)).toBe("L");
   });

   it("should return XC for 90", function() {
       expect(RomanConverter.instance.convert(90)).toBe("XC");
   });

   it("should return C for 100", function() {
       expect(RomanConverter.instance.convert(100)).toBe("C");
   });

   it("should return CD for 400", function() {
       expect(RomanConverter.instance.convert(400)).toBe("CD");
   });

   it("should return D for 500", function() {
       expect(RomanConverter.instance.convert(500)).toBe("D");
   });

   it("should return CM for 900", function() {
       expect(RomanConverter.instance.convert(900)).toBe("CM");
   });

   it("should return M for 1000", function() {
       expect(RomanConverter.instance.convert(1000)).toBe("M");
   });
});
