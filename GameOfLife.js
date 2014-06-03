
function GameOfLife() {
   this.i = 0;

   this.next = function() {
      return 0;
   }
}

GameOfLife.SIZE = 10;

GameOfLife.init = function(div) {
   for(var i=0; i<GameOfLife.SIZE; i++) {
      var tr = document.createElement("tr");
      div.appendChild(tr);
      for(var j=0;j<GameOfLife.SIZE; j++) {
         var td = document.createElement("td");
         tr.appendChild(td);
         td.innerHTML=".";
      }
      div.style.cssText="line-height:40%";
   }
}

GameOfLife.instance = new GameOfLife();

