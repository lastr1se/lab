const binomialCoefficient = (n, k) => {
    if (!Number.isInteger(n) || !Number.isInteger(k)) return "Invalid input";
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    if (k === 1 || k === n - 1) return n;
    k = Math.min(k, n - k);
    let c = 1;
    for (let i = 1; i <= k; i++) {
        c = (c * (n - i + 1)) / i;
    }
    return Math.round(c);
};

console.log(binomialCoefficient(5, 3));
console.log(binomialCoefficient(6, 2)); 
console.log(binomialCoefficient(10, 0)); 
console.log(binomialCoefficient(10, 10));
console.log(binomialCoefficient(10, 1)); 
console.log(binomialCoefficient(10, -1));
