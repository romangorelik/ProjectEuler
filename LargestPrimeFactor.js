// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var prime = 2;
var number = 600851475143;
while(number > 1){
    if(number % prime === 0){ 
        number /= prime;
    } else {
        prime++;
    }
}
console.log(prime)