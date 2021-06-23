const assert = require("assert");
const speedLimit = require("../exercise_3");

describe("speedLimit", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof speedLimit, "function");
    assert.strictEqual(speedLimit.length, 1);
  });
  it("should return “Ok” if the argument is < or = to 80", () => {
    assert.strictEqual(speedLimit(80), "Ok");
    assert.strictEqual(speedLimit(50), "Ok");
  });
  it("should return “Points: 2” if the speed limit is 90", () => {
    assert.strictEqual(speedLimit(90), "Points: 2");
  });
  it("should return “License suspended” if demerit points are > to 12", () => {
    assert.equal(speedLimit(135), "License suspended");
  });
});
