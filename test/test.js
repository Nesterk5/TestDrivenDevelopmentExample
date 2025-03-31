import { assert } from "chai";
import multiply from "../multiply.js";

describe("Multiply Function", function () {
  it("should return 1 when multiplying 1 * 1", function () {
    assert.strictEqual(multiply(1, 1), 1);
  });
  it("should return 4 when multiplying 2 * 2", function () {
    assert.strictEqual(multiply(2, 2), 4);
  });
  it("should return 9 when multiplying 3 * 3", function () {
    assert.strictEqual(multiply(3, 3), 9);
  });
  it("should return 1035 when multiplying 23* 45", function () {
    assert.strictEqual(multiply(23, 45), 1035);
  });
  it("should return 0 when multiplying 0 * 100", function () {
    assert.strictEqual(multiply(0, 100), 0);
  });
  // it("should return -9 when multiplying -9 * 1", function () {
  //   assert.equal(multiply(-9, 1), -10);
  // });
  it("should return 4 when multiplying -4 * -1", function () {
    assert.strictEqual(multiply(-4, -1), 4);
  });
  it("should return 4 when multiplying -4 * -1", function () {
    assert.strictEqual(multiply(-4, -1), 4);
  });
  it('should return 4 when multiplying  "1" * 4', function () {
    assert.strictEqual(multiply("1", 4), 4);
  });
  it('should return 8 when multiplying  "2" * "4"', function () {
    assert.strictEqual(multiply("2", "4"), 8);
  });
  it("should return NaN when multiplying a character by a number", () => {
    assert.strictEqual(multiply("a", 2), NaN);
  });
});
