"use strict";

const english = require("integer-to-cardinal-english");

const irregulars = {
  "One": "First",
  "Two": "Second",
  "Three": "Third",
  "Five": "Fifth",
  "Eight": "Eighth",
  "Nine": "Ninth",
  "Twelve": "Twelfth",
}

function ordinal(input) {
  switch(typeof(input)) {
    case "number":
      var cardinal = english(input);
      break;
    case "string":
      // Assume that the string is already a cardinal
      var cardinal = input;
      break;
    default:
      throw new Error("Arguments must either be an integer or a cardinal string");
  }

  var words = cardinal.split(" ");
  var last_word = words.pop();
  var compounds = last_word.split("-");
  var last_compound = compounds.pop();

  if (last_compound in irregulars) {
    compounds.push(irregulars[last_compound]) // Dictionary lookup of ordinals
  } else {
    if (last_compound[last_compound.length - 1] === "y") {
      compounds.push(last_compound.slice(0, -1) + "ieth"); // Eighty --> Eightieth
    } else {
      compounds.push(last_compound + "th");  // "Regular" ordinalization
    }
  }

  words.push(compounds.join("-"));
  return words.join(" ");
}

module.exports = ordinal;
