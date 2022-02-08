"use strict";

const cardinal = require("integer-to-cardinal-english");
const ordinal = require("integer-to-ordinal-english");

const ratio = function(a, b) {
  if (a === 1 && b === 2) {
    return "One Half";
  } else if (b === 2) {
    return cardinal(a) + " Halves";
  } else if (a === 1) {
    return "One " + ordinal(b);
  } else {
    return cardinal(a) + " " + ordinal(b) + "s";
  }
};

const rational = function(n) {
  var string = n.toString();  // Should truncate trailing zeros for precision
  var split = string.split(".");
  var integer = cardinal(+split[0]);
  if (typeof(split[1]) === "undefined") {
    return integer;
  }

  var denominator = ordinal(10 ** split[1].length).split(" ");
  var precision = denominator[denominator.length - 1];
  var quotient = cardinal(+split[1]) + " " + precision;

  if (+split[1] !== 1) {
    quotient += "s";
  }
  return integer + " and " + quotient;
};

const english = function(a, b) {
  if (typeof(b) === "undefined") {
    return rational(a);
  } else {
    return ratio(a, b);
  }
};

module.exports = english;
