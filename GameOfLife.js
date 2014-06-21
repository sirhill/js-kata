
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
      var rowF = function(board) { return function(i) { board[i] = []; }; };
      var caseF = function(board) { return function(i,j) { board[i][j] = GameOfLife.DEAD; }; };

      this.iterate(
        rowF(this.board),
        caseF(this.board)
      );
   }

   this.initBoard = function(values) {
      this.init();
      for(var i=0, value; value = values[i]; i++) {
        this.board[value[0]][value[1]] = GameOfLife.LIVING;
      }
   }

   this.getBoard = function() {
      var boardWithBorder = [];
      for(var i=0; i<this.size+2; i++) {
        boardWithBorder[i] = [];
        for(var j=0;j<this.size+2; j++) {
           if((i>0 && j>0) && (i<this.size+1 && j<this.size+1)) {
             boardWithBorder[i][j] = this.board[i-1][j-1];
           }
           else {
             boardWithBorder[i][j] = GameOfLife.BORDER;
           }
        }
      }
      return boardWithBorder;
   }

   this.display = function(div) {
     div.innerHTML = "";
     for(var i=0; i<this.size; i++) {
       var tr = document.createElement("tr");
       div.appendChild(tr);
       for(var j=0;j<this.size; j++) {
         var td = document.createElement("td");
         tr.appendChild(td);
         td.innerHTML=this.board[i][j];
       }
     }
     div.style.cssText="line-height:40%;font-family: 'courier'";
   }

   this.getNeighbourCount = function(i, j) {
     var count = 0;
     var iMin = (i==0) ? 0 : -1;
     var iMax = (i==this.size-1) ? 0: 1;
     var jMin = (j==0) ? 0 : -1;
     var jMax = (j==this.size-1) ? 0: 1;
     //console.log("("+i+", "+j+") " +iMin+", "+iMax+" : "+jMin + ", " + jMax);
     for(var cI = iMin; cI <= iMax; cI++) {
       for(var cJ = jMin; cJ <= jMax; cJ++) {
	  if(!(cI==0 && cJ==0) && this.board[i+cI][j+cJ] == GameOfLife.LIVING) {
             count++;
          }
       } 
     }
     return count;
   }

   this.next = function() {
     var nextBoard = [];
     for(var i=0; i<this.size; i++) {
       nextBoard[i] = [];
       for(var j=0;j<this.size; j++) {
         var neighbourCount = this.getNeighbourCount(i,j);

	 if(this.board[i][j] == GameOfLife.LIVING && (neighbourCount < 2 || neighbourCount > 3)) {
           nextBoard[i][j] = GameOfLife.DEAD; 
         }
         else if(this.board[i][j] == GameOfLife.DEAD && neighbourCount == 3) {
           nextBoard[i][j] = GameOfLife.LIVING;
         }
         else {
           nextBoard[i][j] = this.board[i][j];
         }
       }
     } 
     this.board = nextBoard;
   }

   this.getCell = function(i,j) {
      return this.board[i][j];
   }

   this.applyRule = function(cell) {
      return cell;
   }
}

GameOfLife.SIZE = 10;
GameOfLife.DEAD = "&nbsp;";
GameOfLife.LIVING = "o";
GameOfLife.BORDER = "x";

var initBoard = [ [ 4, 5 ], [ 5, 4 ], [ 5, 5 ], [ 5, 6 ], [ 6, 5 ] ];

GameOfLife.instance = new GameOfLife(GameOfLife.SIZE);
GameOfLife.instance.initBoard( initBoard );

