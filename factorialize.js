function factorialize(num) {
    let factorialNum = 1
    for (let i = 2; i <= num; i++) {
        factorialNum *= i
    }
    return factorialNum
}

console.log(factorialize(5))