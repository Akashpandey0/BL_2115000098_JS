function convertTemperature(value, unit) {
    if (unit === 'C') {
        return (value * 9/5) + 32;
    } else if (unit === 'F') {
        return (value - 32) * 5/9;
    } else {
        return 'Invalid unit';
    }
}
console.log(`100°C to Fahrenheit: ${convertTemperature(100, 'C')}`);
console.log(`212°F to Celsius: ${convertTemperature(212, 'F')}`);