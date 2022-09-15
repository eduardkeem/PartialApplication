'use strict';

// Define function power(exp, n), the same as Math.pow(n, exp)
// but with reverse order of argumants.

const power = (exp) => (n) => (n ** exp);

console.log(power(1)(2));

// Implement function `square(n)`, which returns square of its argument.
// The function may or may not reuse function `power`.

/* const square = (exp) => (n) => (exp(n));

  console.log(square(Math.sqrt)(25)); */

const square = (e) => (n) => (n ** e);

console.log(square(2)(6));

// Implement function `cube(n)` using partial application
// The function should return cube of argumant (to the power of three).
const cube = (exp, n) => exp(n);

console.log((cube.bind(null, Math.cbrt)(27)));

module.exports = { power, square, cube };
