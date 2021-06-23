const assert = require('assert');
const fozz_bezz = require('../exercise_2');

describe("fozz_bezz", () => {
  // give the test a label using it
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof fozz_bezz, "function");
    assert.strictEqual(fozz_bezz.length, 1);
  });
  it("should return “FozzBezz” if the number is divisible by both 3 and 5", () => {
    assert.strictEqual(fozz_bezz(15), "FozzBezz");
  });
  it("should return “Fozz” if the number is divisible by 3", () => {
    assert.strictEqual(fozz_bezz(6), "Fozz");
  });
  it("should return “Bezz” if the number is divisible by 5", () => {
    assert.strictEqual(fozz_bezz(10), "Bezz");
  });
    it("should return the argument if the number is not divisible by 3 nor 5", () => {
    assert.strictEqual(fozz_bezz(7), 7);
  });

});