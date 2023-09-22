function fiboEvenSum(n) {
    let first = 1, second = 2
    let fibSequence = [first, second]
    let fib = 0, sum = 0

    for (let i = 0; fib < n; i++) {
        fib = first + second
        first = second
        second = fib
        fibSequence.push(fib)
    }

    for (const fibValue of fibSequence) {
        if (fibValue % 2 === 0) {
            sum += fibValue
        }
    }
    return sum
}

console.log(fiboEvenSum(34))
