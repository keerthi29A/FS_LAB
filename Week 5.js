// sumArray.js
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log("Sum of the array:", sumArray(array));



// isLeapYear.js
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

// Example usage
const year = 2024;
console.log(year + " is a leap year:", isLeapYear(year));


// isPalindrome.js
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage
const str = "Madam";
console.log(str + " is a palindrome:", isPalindrome(str));


// isFirstCharUppercase.js
function isFirstCharUppercase(str) {
    return /^[A-Z]/.test(str);
}

// Example usage
const string = "Hello World";
console.log("First character is uppercase:", isFirstCharUppercase(string));


