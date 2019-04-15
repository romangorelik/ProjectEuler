/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

let pyth = () => {
  let arr = []
  let num = []

  for (let i = 2; i < 500; i++) {
    for (let j = 2; j < 500; j++) {
      let num = Math.pow(i, 2) + Math.pow(j ,2);
      num = Math.sqrt(num);
      if (Number.isInteger(num)) arr.push([i, j, num])
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let reducer = (a, c) => a + c;
    if (arr[i].reduce(reducer) === 1000) {
      num = arr[i].slice();
    }
  }

  let multiple = 1;
  for (let i = 0; i < num.length; i++) {
    multiple *= num[i];
  }

  return multiple
}

console.log(pyth())