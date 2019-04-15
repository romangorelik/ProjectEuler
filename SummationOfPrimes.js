

let isPrime = (param) => {
  if(param === 1){
    return false;
  }
  if(param === 2){
    return true;
  }
  if(param % 2 === 0){
    return false;
  }
  var ceil = Math.ceil(Math.sqrt(param));
  for(var i = 3; i <= ceil; i += 2){
    if(param % i === 0){
      return false;
    }
  }
  return true;
}

let summation = (num) => {
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }

  }

  return sum;
}

console.log(summation(2000000))