import { assert } from "chai";
import multiply from "../multiply.js";

describe("Multiply Function", function () {
  it("should return 1 when multiplying 1 * 1", function () {
    assert.equal(multiply(1, 1), 1);
  });
  it("should return 4 when multiplying 2 * 2", function () {
    assert.equal(multiply(2, 2), 4);
  });
  it("should return 9 when multiplying 3 * 3", function () {
    assert.equal(multiply(3, 3), 9);
  });
  it("should return 16 when multiplying 4 * 4", function () {
    assert.equal(multiply(4, 4), 16);
  });
  it("should return 1035 when multiplying 23 * 45", function () {
    assert.equal(multiply(23, 45), 1035);
  });
});
