const moment = require('moment')

const data = moment('2022-01-25T00:30:05.933Z').utc().valueOf()
const data2 = moment().utc().valueOf()

console.log(data2.diff(data, 'milliseconds'))