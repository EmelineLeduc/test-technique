const assert = require("assert");
const showNumbers = require("../exercise_4");

describe("showNumbers", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof showNumbers, "function");
    assert.strictEqual(showNumbers.length, 1);
  });
  it('should return “["0 EVEN", "1 ODD", "2 EVEN"]” if argument is 2', () => {
    assert.strictEqual(showNumbers(2), ["0 EVEN", "1 ODD", "2 EVEN"]);
  });
});
