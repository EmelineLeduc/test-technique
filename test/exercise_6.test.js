const assert = require("assert");
const show_stars = require("../exercise_6");

describe("show_stars", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof show_stars, "function");
    assert.strictEqual(show_stars.length, 1);
  });
  it("should return ['*', '**', '***', '****', '*****'] with 5 as argument", () => {
    assert.deepStrictEqual(show_stars(5), ["*", "**", "***", "****", "*****"]);
  });
  it("should return ['*'] with 1 as argument", () => {
    assert.deepStrictEqual(show_stars(1), ["*"]);
  });
});
