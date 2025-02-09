
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Check if a number is perfect
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

// Check if a number is Armstrong
function isArmstrong(num) {
    const digits = num.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
    return sum === num;
}

// Calculate sum of digits
function digitSum(num) {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}


module.exports = {
    isPrime,
    isPerfect,
    isArmstrong,
    digitSum
};