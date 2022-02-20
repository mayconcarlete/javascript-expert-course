class Calculator {
  sum(a, b){
    return a + b
  }
}

Object.assign(Calculator.prototype, {
  sub: (a, b) => a - b
})

const calc = new Calculator()

console.log(calc.sum(1, 1))
console.log(calc.sub(1, 1))