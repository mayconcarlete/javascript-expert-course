const Calculator = {
  sum(a, b){return  a + b},
  async sub(a, b){
    return new Promise((resolve, reject) => {
      resolve(Calculator.sum(a, b))
    })
  }
}

module.exports = Calculator