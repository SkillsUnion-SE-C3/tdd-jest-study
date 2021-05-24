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
});

describe("the parameters validation of sum()", () => {
  // Data type of input may not be integer, but it should be parsed as int within.
  test("Convert string to integer", () => {
    random.mockReturnValue(0);
    expect(testObject.sum("1", "1")).toBe(2);
  });

  // Data type such as "apple" cannot be parsed as int.
  test("Non numeric input to throw an error", () => {
    expect(() => {
      testObject.sum("apple", "orange");
    }).toThrow(new Error("Input must be numeric"));
  });
});
