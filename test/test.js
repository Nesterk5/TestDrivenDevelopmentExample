import { assert } from "chai";
import multiply from "../multiply.js";

describe("Multiply Function", function () {
  it("should return 1 when multiplying 1 * 1", function () {
    assert.equal(multiply(1, 1), 1);
  });
});
