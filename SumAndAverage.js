let sum = 0;
let numbers = [];
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10;
    numbers.push(num);
    sum += num;
}
console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", sum / 5);