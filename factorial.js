const factorial = (n) => 
    n < 0 
        ? (() => { console.error("Negative number"); })() 
        : n <= 1 
            ? 1 
            : n * factorial(n - 1);

console.log(factorial(1)); 
console.log(factorial(5)); 
console.log(factorial(-4)); 