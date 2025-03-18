function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(`Year 2024 is Leap Year: ${isLeapYear(2024)}`);