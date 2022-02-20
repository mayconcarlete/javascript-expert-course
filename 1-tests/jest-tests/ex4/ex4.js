const Calculator = {
  sum(a, b){return  a + b},
  async sub(a, b){
    return new Promise((resolve, reject) => {
      resolve(a-b)
    })
  }
}

module.exports = Calculator