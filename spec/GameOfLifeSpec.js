describe("GameOfLife next generation", function() {
   var b = GameOfLife.BORDER;
   var d = GameOfLife.DEAD;
   var l = GameOfLife.LIVING;

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

   it("initBoard()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      gameOfLife.initBoard([ [ 0, 0 ] ]);
      expect(gameOfLife.board[0][0]).toBe(GameOfLife.LIVING);
   });

   it("next()", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      expect(gameOfLife.getBoard()).toEqual([ [ b, b, b ], [ b, d, b ], [ b, b, b] ] );
   });

   it("getCell() when size is 1", function() {
      var gameOfLife = new GameOfLife(1);
      gameOfLife.init();
      gameOfLife.initBoard([[0,0]]);
      expect(gameOfLife.getBoard()).toEqual([ [ b, b, b ], [ b, l, b ], [ b, b, b] ] );
   });

   it("getNeightbourCount", function() {
      var gameOfLife = new GameOfLife(3);
      gameOfLife.init();
      expect(gameOfLife.getNeighbourCount(0,0)).toEqual(0);
      expect(gameOfLife.getNeighbourCount(0,2)).toEqual(0);
      expect(gameOfLife.getNeighbourCount(2,0)).toEqual(0);
      expect(gameOfLife.getNeighbourCount(2,2)).toEqual(0);

      gameOfLife.initBoard([[1,1]]);
      expect(gameOfLife.getBoard()).toEqual([ [ b, b, b, b, b ], [ b, d, d, d, b ], [ b, d, l, d, b ], [ b, d, d, d, b ], [ b, b, b, b, b ] ]);
      expect(gameOfLife.getNeighbourCount(0,0)).toEqual(1);
      expect(gameOfLife.getNeighbourCount(0,2)).toEqual(1);
      expect(gameOfLife.getNeighbourCount(2,0)).toEqual(1);
      expect(gameOfLife.getNeighbourCount(2,2)).toEqual(1);

      gameOfLife.initBoard([[1,1],[2,1]]);
      expect(gameOfLife.getNeighbourCount(0,0)).toEqual(1);
      expect(gameOfLife.getNeighbourCount(0,2)).toEqual(1);
      expect(gameOfLife.getNeighbourCount(2,0)).toEqual(2);
      expect(gameOfLife.getNeighbourCount(2,2)).toEqual(2);
   });

   it("underpopulation", function() {
      var gameOfLife = new GameOfLife(3);
      gameOfLife.initBoard([[1,1]]);
      gameOfLife.next();
      expect(gameOfLife.getBoard()).toEqual([ [ b, b, b, b, b ], [ b, d, d, d, b ], [ b, d, d, d, b ], [ b, d, d, d, b ], [ b, b, b, b, b ] ]); 
   });

   it("overpopulation", function() {
      var gameOfLife = new GameOfLife(3);
      gameOfLife.initBoard([[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]]);
      gameOfLife.next();
      expect(gameOfLife.getBoard()).toEqual([ [ b, b, b, b, b ], [ b, l, l, d, b ], [ b, d, d, l, b ], [ b, l, l, d, b ], [ b, b, b, b, b ] ]);
   });

});

