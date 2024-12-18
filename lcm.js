const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const lcmTwoNumbers = (x, y) => (x * y) / gcd(x, y);

const lcm = (...numbers) =>
    numbers.reduce((acc, num) => lcmTwoNumbers(acc, num));

console.log(lcm(9, 12));
console.log(lcm(8, 14, 18));
console.log(lcm(5, 10, 20, 25));
