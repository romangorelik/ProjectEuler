/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

let isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let thousandthPrime = () => {
  let counter = 0;

  for (let i = 2; i < Infinity; i++) {
    if (isPrime(i)) counter++;
    if (counter === 10001) return i;
  }
}

console.log(thousandthPrime())
