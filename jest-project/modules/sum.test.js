import { sum } from "./sum";

describe("test main.js", () => {
  test("1 + 1 = 2 to pass", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("1 + 1 = 3 to fail", () => {
    expect(sum(1, 1)).toBe(3);
  });
});
