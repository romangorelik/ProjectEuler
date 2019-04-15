// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers

let largestPalindrome = () => {
  let max = 0;
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let num = i * j;
      let string = '' + num;
      if (string === string.split('').reverse().join('') && num > max) max = num;
    }
  }
  return max;
}

console.log(largestPalindrome())