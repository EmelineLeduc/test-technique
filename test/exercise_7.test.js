const assert = require("assert");
const primeNumber = require("../exercise_7");

describe("primeNumber", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof primeNumber, "function");
    assert.strictEqual(primeNumber.length, 1);
  });
  it("should return [0, 2, 3] with 5 as argument", () => {
    assert.deepStrictEqual(primeNumber(5), [0, 2, 3]);
  });
  it("should return [0, 2, 3, 5, 7, 11, 13, 17] with 18 as argument", () => {
    assert.deepStrictEqual(primeNumber(18), [0, 2, 3, 5, 7, 11, 13, 17]);
  });
});
