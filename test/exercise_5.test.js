const assert = require("assert");
const sum = require("../exercise_5");

describe("sum", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof sum, "function");
    assert.strictEqual(sum.length, 1);
  });
  it("should return 98 with 20 as argument", () => {
    assert.strictEqual(sum(20), 98);
  });
  it("should return 0 with 2 as argument", () => {
    assert.strictEqual(sum(2), 0);
  });

  it("should return 3 with 3 as argument", () => {
    assert.strictEqual(sum(2), 0);
  });
  it("should return 3 with 3 as argument", () => {
    assert.strictEqual(sum(50), 593);
  });
});
