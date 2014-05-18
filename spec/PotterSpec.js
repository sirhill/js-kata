
describe("I pay ", function() {

   it("0 when I buy 0 books", function() {
      var potter = (new HarryPotter()).setBasket([0]);
      expect(potter.buy()).toBe(0);       
   });

   it("8 when I buy the first book", function() {
      var potter = (new HarryPotter()).setBasket([1]);
      expect(potter.buy()).toBe(8);
   });

   it("16 when I buy the twice first book", function() {
      var potter = (new HarryPotter()).setBasket([2]);
      expect(potter.buy()).toBe(16);
   });

   it("80 when I buy the 10 times the first book", function() {
      var potter = (new HarryPotter()).setBasket([10]);
      expect(potter.buy()).toBe(80);
   });

   it("15.2 when I buy the first book and the second book", function() {
      var potter = (new HarryPotter()).setBasket([1,1]);
      expect(potter.buy()).toBe(15.2);
   });
  
   it("30.4 when I buy (2,2)", function() {
      var potter = (new HarryPotter()).setBasket([2,2]);
      expect(potter.buy()).toBe(30.4);
   });

   it("23.2 when I buy (2,1)", function() {
      var potter = (new HarryPotter()).setBasket([2,1]);
      expect(potter.buy()).toBe(23.2);
   });

   it("21.6 when I buy (1,1,1)", function() {
      var potter = (new HarryPotter()).setBasket([1,1,1]);
      expect(potter.buy()).toBe(21.6);
   });

   it("29.6 when I buy (1,1,0,2)", function() {
      var potter = (new HarryPotter()).setBasket([1,1,0,2]);
      expect(potter.buy()).toBe(29.6);
   });

   it("21.6 when I buy (1,0,0,1,1)", function() {
      var potter = (new HarryPotter()).setBasket([1,0,0,1,1]);
      expect(potter.buy()).toBe(21.6);
   });

   it("25.6 when I buy (1,1,1,1)", function() {
      var potter = (new HarryPotter()).setBasket([1,1,1,1]);
      expect(potter.buy()).toBe(25.6);
   });

   it("30 when I buy (1,1,1,1,1)", function() {
      var potter = (new HarryPotter()).setBasket([1,1,1,1,1]);
      expect(potter.buy()).toBe(30);
   });

   it("51.2 when I buy (2,2,2,1,1)", function() {
      var potter = (new HarryPotter()).setBasket([2,2,2,1,1]);
      expect(potter.buy()).toBe(51.2);
   });

   it("45.2 when I buy (1,1,1,2,2)", function() {
      var potter = (new HarryPotter()).setBasket([1,1,1,2,2]);
      expect(potter.buy()).toBe(45.2);
   });

   it("66.4 when I buy (3,1,1,3,2)", function() {
      var potter = (new HarryPotter()).setBasket([3,1,1,3,2]);
      expect(potter.buy()).toBe(66.4);
   });
});


