// import the file which we want to test against
const testObject = require("./sum");
let { random } = require("./random");
jest.mock("./random", () => ({
  random: jest.fn(),
}));

describe("the logic of sum()", () => {
  // This test will pass because 1 + 1 = 2 is correct.
  test("1 + 1 = 2 to pass", () => {
    random.mockReturnValue(0); // mock return value
    expect(testObject.sum(1, 1)).toBe(2);
  });

  // This test will fail because 1 + 1 = 3 is wrong.
  test("1 + 1 = 3 to fail", () => {
    expect(testObject.sum(1, 1)).toBe(3);
  });
});
