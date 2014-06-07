describe("GameOfLife next generation", function() {

   it("init()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      expect(gameOfLife.board).toEqual([[GameOfLife.DEAD]]);
   });

   it("reinit()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      gameOfLife.init();
      expect(gameOfLife.board).toEqual([[GameOfLife.DEAD]]);
   });

   it("setBoard()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.setBoard([ [ 0, 0 ] ]);
      expect(gameOfLife.board[0][0]).toBe(GameOfLife.LIVING);
   });

   it("next()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.setBoard([ [ 0, 0 ] ]);
      gameOfLife.next();
   });

   it("getCell()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      gameOfLife.getCell(0,0);
      expect(gameOfLife.getCell(0,0)).toBe(GameOfLife.DEAD);
   });

   it("applyRule()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      expect(gameOfLife.applyRule(0)).toBe(0); 
   });
});

