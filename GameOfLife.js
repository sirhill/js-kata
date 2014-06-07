
function GameOfLife(size) {

   this.i = 0;
   this.size = size;
   this.board = [];

   this.next = function() {
      return 0;
   }

   this.iterate = function(rowF, caseF) {
      for(var i=0; i<this.size; i++) {
        rowF(i);
        for(var j=0;j<this.size; j++) {
            caseF(i,j);
        }
      }
   }

   this.init = function() {
      var board = [];
      this.iterate(
        function(i) { board[i] = [] },
        function(i,j) { board[i][j] = GameOfLife.DEAD; }
      );
      this.board = board;
   }

   this.setBoard = function(values) {
      this.init();
      for(var i=0, value; value = values[i]; i++) {
        this.board[value[0]][value[1]] = GameOfLife.LIVING;
      }
   }

   this.display = function(div) {
     div.innerHTML = "";
     for(var i=0; i<GameOfLife.SIZE; i++) {
       var tr = document.createElement("tr");
       div.appendChild(tr);
       for(var j=0;j<GameOfLife.SIZE; j++) {
         var td = document.createElement("td");
         tr.appendChild(td);
         td.innerHTML=this.board[i][j];
       }
     }
     div.style.cssText="line-height:40%;font-family: 'courier'";
   }

   this.next = function() {
     var applyRule = this.applyRule;
     var getCell = this.getCell;
     var board = this.board;
 
     var caseF = function(i,j) {
       this.board = board;
       applyRule(getCell(i,j));
     }
 
     this.iterate(
       function(i) { },
       caseF 
     );
   }

   this.getCell = function(i,j) {
      console.log(this.board);
      return this.board[i][j];
   }

   this.applyRule = function(cell) {
      return cell;
   }
}

GameOfLife.SIZE = 10;
GameOfLife.DEAD = "&nbsp;";
GameOfLife.LIVING = "o";

GameOfLife.instance = new GameOfLife(GameOfLife.SIZE);
GameOfLife.instance.setBoard( [ [ 4, 4 ], [ 4, 5 ], [ 5, 4 ], [ 5, 5 ] ] );

