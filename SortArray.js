let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);
console.log("2nd Smallest:", sortedNumbers[1], "2nd Largest:", sortedNumbers[sortedNumbers.length - 2]);