const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects } = require('assert')
;
(async () => {
  {
    const filePath = './mocks/empty-file-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/four-items-file.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
})()
