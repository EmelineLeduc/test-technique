const assert = require('assert');
const maxNumber = require('../exercise_1');

describe("maxNumber", () => {
  it("is a function accepting two arguments", () => {
    assert.strictEqual(typeof maxNumber, "function");
    assert.strictEqual(maxNumber.length, 2);
  });
  it("should return the maximum of two numbers", () => {
    assert.strictEqual(maxNumber(1, 6), 6);
  });
});