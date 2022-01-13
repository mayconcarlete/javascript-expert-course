module.exports = {
  sum(...args){
    return args.reduce(
      (pre, next) => Number(pre) + Number(next),0
    )
  }
}