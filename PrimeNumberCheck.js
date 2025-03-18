let num = 29;
let isPrime = num > 1 && Array.from({ length: num - 2 }, (_, i) => i + 2).every(i => num % i !== 0);
console.log(num, "is Prime:", isPrime);