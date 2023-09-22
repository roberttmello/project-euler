function isPrime(number) {
    let i

    if(number < 2) {
        return false
    }

    for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false
    }
    return true
}

function largestPrimeFactor(number) {
    let i, largestPrimeFactorValue

    for (i = 1; i < Math.sqrt(number) + 7; i++) {
        if(isPrime(i) && number % i === 0) {
            largestPrimeFactorValue = i
        }
    }
    return largestPrimeFactorValue
}

console.log(largestPrimeFactor(10))
