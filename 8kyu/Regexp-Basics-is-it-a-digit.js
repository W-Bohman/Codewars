Regexp-Basics-is-it-a-digit.js

//Implement a function that returns true when a given string only contains a single digit (0-9), false otherwise.
//Solutions

String.prototype.digit = function() {
  return /^\d$/.test(this);
};

String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};

String.prototype.digit = function() {
  return this.match(/^[0-9]$/) ? true : false;
};