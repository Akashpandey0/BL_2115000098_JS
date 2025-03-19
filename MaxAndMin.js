let diceRolls = new Map();

while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceRolls.set(roll, (diceRolls.get(roll) || 0) + 1);
    
    if ([...diceRolls.values()].some(count => count === 10)) break;
}

let maxRoll = [...diceRolls.entries()].reduce((a, b) => (b[1] > a[1] ? b : a));
let minRoll = [...diceRolls.entries()].reduce((a, b) => (b[1] < a[1] ? b : a));

console.log("Most Rolled Number:", maxRoll[0], "with", maxRoll[1], "times");
console.log("Least Rolled Number:", minRoll[0], "with", minRoll[1], "times");