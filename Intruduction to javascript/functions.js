/**
 * Sums two parameters
 * @param {object} First value
 * @param {object} Second value
 * @returns {object} the sum of the parameters.
 */

function sum(a, b) {
  return a + b;
}
/**
 * Multiplicate two parameters
 * @param {object} First value
 * @param {object} Second value
 * @returns {object} the multiplication of the parameters.
 */
function multiply(a, b) {
  return a * b;
}

console.log(sum(10, 10));
console.log(multiply(10, 10));

const largeNumber = multiply(13462, 2394);
console.log(largeNumber);

/**
 * Console Loging after 1000 ms
 * @returns {string} after 1 second.
 */

setTimeout(function () {
  console.log('This text appears after 1000 ms.');
}, 1000);

/**
 * The same as above using an anonymous function
 * Console Loging after 1000 ms
 * @returns {string} after 1 second.
 */

const timeout = 1000;

setTimeout(
  () => console.log(`The author id is not equal to ${timeout} ms.`),
  timeout
);
