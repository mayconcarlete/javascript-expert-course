const moment = require('moment')

const data = moment('2022-01-25T00:30:05.933Z')
const data2 = moment()

console.log(data2.diff(data, 'milliseconds'))