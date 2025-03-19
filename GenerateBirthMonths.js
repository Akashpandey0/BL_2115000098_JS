let birthMonths = new Map();

for (let i = 0; i < 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    birthMonths.set(month, (birthMonths.get(month) || []).concat(i + 1));
}

console.log("People grouped by Birth Month:", birthMonths);