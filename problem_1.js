function multiplesOf3and5(number) {
    let sum = 0
    for (let value = 3; value < number; value++) {
        if (value % 3 === 0 || value % 5 === 0) {
            sum += value
        }
    }
    return sum
}

console.log(multiplesOf3and5(1000))
