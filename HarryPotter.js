
function HarryPotter() {
   var unitPrice = 8;
   var unitDiscount = 0.05;
   var discount = [ 0, 5, 10, 20, 25 ];

   this.sum = 0;
   this.basket = [0,0,0,0,0];

   this.basketSize = function () {
      var itemsNumber = 0;
      for(var book, i=0;i < 5; i++) {
         itemsNumber += this.basket[i];
      }
      return itemsNumber;
   }

   this.basketIsEmpty = function() {
      return (this.basketSize() == 0);
   }

   this.setBasket = function(bookArray) {
      if(bookArray.size > 5) {
        throw "The basket is limited to 5 books";
      }
     
      for(var i=0; i < bookArray.length; i++) {
          this.basket[i] = bookArray[i];
      }

      return this;
   }

   this.getNextBuyGroup = function() {
	   var nextBuyGroupVolume = 0;
	   for(var i=0;i < this.basket.length; i++) {
		   var book = this.basket[i];
		   if(book > 0) {
			   nextBuyGroupVolume++;
			   this.basket[i]--;
		   }
	   }
	   return nextBuyGroupVolume;
   }

   this.buyForOneDiscount = function(nextBuyGroupVolume) {
     var bestDiscount = discount[nextBuyGroupVolume - 1];
     //console.log("using discount "+bestDiscount+"%");
     this.sum += (unitPrice * nextBuyGroupVolume) * (1 - bestDiscount / 100);
   }

   this.buy = function() {
     var discountPlan = [];
     var i=0;
     var num5Discount = 0, num3Discount = 0; // To replace the plan (5,3) by (4,4) any number of times
     
     while (!this.basketIsEmpty()) {
        discountPlan[i] = this.getNextBuyGroup();
        this.buyForOneDiscount(discountPlan[i]);

        if(discountPlan[i] == 5) {
           num5Discount++;
        } 
        if(discountPlan[i] == 3) {
           num3Discount++;
        }
        i++;
     }

     //Here is done the optimization
     var numOptimizationToApply = Math.min(num5Discount, num3Discount);
     if(numOptimizationToApply > 0) {
          this.sum -= numOptimizationToApply * 0.4; // 0.4 is the price difference between (5,3) and (4,4)
          this.sum = Math.round( this.sum * 100 ) / 100; // Fixing floating operation in javascript
     }

     return this.sum;
   }
}

