/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  let check = function(number) {
    if (factor_0.toString().length || factor_1.toString().length < number) {
      return null;
    } else {
      let palindromeNumber = factor_0 * factor_1;
      let arr = palindromeNumber.split(""); // [1,2,3,4]
      if (arr[0] === arr[3] && arr[1] === arr[2]) {
        return factor_0 + " * " + factor_1 + " = " + palindromeNumber;
      } else if (arr[0] === arr[5] && arr[1] === arr[4] && arr[2] === arr[3]) {
        return factor_0 + " * " + factor_1 + " = " + palindromeNumber;
      } else {
        return null;
      }
    }
  };

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
