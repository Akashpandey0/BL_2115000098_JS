let num = 5;
let factorial = Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
console.log("Factorial of", num, "is", factorial);