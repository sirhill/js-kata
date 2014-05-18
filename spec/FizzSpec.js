
describe("FizzBuzz next ", function() {
  it("should return 1 for 0", function() {
    var fizzBuzz = new FizzBuzz(0);
    expect(fizzBuzz.next()).toBe(1);
  });

  it("should return 2 for 1", function() {
    var fizzBuzz = new FizzBuzz(1);
    expect(fizzBuzz.next()).toBe(2);
  });

  it("should return 'Fizz'", function() {
    var fizzBuzz = new FizzBuzz(2);
    expect(fizzBuzz.next()).toBe("Fizz");
  });

  it("should return 'Buzz'", function() {
    var fizzBuzz = new FizzBuzz(4);
    expect(fizzBuzz.next()).toBe("Buzz");
  });

  it("should return 'Fizz' if next is multiple of 3", function() {
    var fizzBuzz9 = (new FizzBuzz(8)).next();
    var fizzBuzz12 = (new FizzBuzz(11)).next();
    expect(fizzBuzz9+fizzBuzz12).toBe("FizzFizz");
  });

  it("should return 'Buzz' if next is multiple of 5", function() {
    var fizzBuzz10 = (new FizzBuzz(9)).next();
    var fizzBuzz20 = (new FizzBuzz(19)).next();
    expect(fizzBuzz10+fizzBuzz20).toBe("BuzzBuzz");
  });

  it("should return 'FizzBuzz' if next is both multiple of 3 and 5", function() {
    var fizzBuzz15 = (new FizzBuzz(14)).next();
    var fizzBuzz30 = (new FizzBuzz(29)).next();
    expect(fizzBuzz15+fizzBuzz30).toBe("FizzBuzzFizzBuzz");
  });
});

describe("FizzBuzz instance", function() {
  it("should return the class singleton", function() {
    expect(FizzBuzz.instance).toBeDefined();
  });
});
