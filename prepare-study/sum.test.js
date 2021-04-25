const sum = require("./sum.js");

describe("the functionality of sum()", () => {
  test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("999 + 1 = 1000", () => {
    expect(sum(999, 1)).toBe(1000);
  });
});
