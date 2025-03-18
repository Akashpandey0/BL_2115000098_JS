function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}
let number = 121;
console.log(number, "is Palindrome:", isPalindrome(number));