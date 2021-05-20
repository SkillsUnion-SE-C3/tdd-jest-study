// import the file which we want to test against
import { sum } from "./sum";

describe("test the logic of sum()", () => {
  // This test will pass because 1 + 1 = 2 is correct.
  test("1 + 1 = 2 to pass", () => {
    expect(sum(1, 1)).toBe(2);
  });

  // This test will fail because 1 + 1 = 3 is wrong.
  test("1 + 1 = 3 to fail", () => {
    expect(sum(1, 1)).toBe(3);
  });
});
