let diceRolls = new Map();

while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceRolls.set(roll, (diceRolls.get(roll) || 0) + 1);
    
    if ([...diceRolls.values()].some(count => count === 10)) break;
}

console.log("Dice Rolls Count:", diceRolls);