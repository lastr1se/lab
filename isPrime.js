const isPrime = (num) => {
    if (num < 2) return false;
    const boundary = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return true;
};

console.log(isPrime(11)); 
console.log(isPrime(18)); 
console.log(isPrime(-7)); 
