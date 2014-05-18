
function FizzBuzz(initValue) {

  this.value = initValue;
  
  this.next = function() {
    this.value += 1;

    var result = "";
    if(this.value % 3 === 0) {
      result += "Fizz";
    }
    if(this.value % 5 === 0) {
      result += "Buzz";
    }
    if(result == "") {
      result = this.value;
    }
    return result;
  }
}

FizzBuzz.instance = new FizzBuzz(0);
