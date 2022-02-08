const english = require("./index");

const assertions = [
  // Ratio
  [[0, 2], "Zero Halves"],
  [[1, 2], "One Half"],
  [[2, 2], "Two Halves"],
  [[3, 2], "Three Halves"],
  [[0, 3], "Zero Thirds"],
  [[1, 3], "One Third"],
  [[2, 3], "Two Thirds"],
  [[3, 3], "Three Thirds"],
  [[4, 3], "Four Thirds"],
  [[1, 4], "One Fourth"],
  [[2, 4], "Two Fourths"],
  [[3, 4], "Three Fourths"],
  [[4, 4], "Four Fourths"],
  [[5, 4], "Five Fourths"],
  [[1, 10], "One Tenth"],
  [[1, 100], "One One Hundredth"],
  [[1, 200], "One Two Hundredth"],
  [[1, 1000], "One One Thousandth"],

  // Rationals
  [[0.0], "Zero"],
  [[0.00], "Zero"],
  [[0.000], "Zero"],
  [[1.0], "One"],
  [[1.00], "One"],
  [[1.000], "One"],
  [[1.1], "One and One Tenth"],
  [[1.10], "One and One Tenth"],
  [[1.11], "One and Eleven Hundredths"],
  [[1.01], "One and One Hundredth"]
]

assertions.forEach((assertion) => {
  var args = assertion[0];
  var expected = assertion[1];
  var actual = english(args[0], args[1]);
  console.assert(actual === expected, args, expected, actual);
});
