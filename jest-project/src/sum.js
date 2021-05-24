const { random } = require("./random");

module.exports.sum = (a, b) => {
  // Check for input 'a' and 'b' using isNaN - is not a number
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Input must be numeric");
  }
  // If input are string but is still numeric value, parse it.
  return parseInt(a) + parseInt(b) + random();
};
