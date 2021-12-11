const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
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
  {
    const filePath = './mocks/three-items-file.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "id": 1,
        "name": "Maycon Carlete",
        "profession": "Javascript",
        "birthDate": 1990
      },
      {
        "id": 2,
        "name": "Erick Wendel",
        "profession": "python",
        "birthDate": 2001
      },
      {
        "id": 3,
        "name": "Carolina Lima",
        "profession": "C#",
        "birthDate": 1994
      }
    ]
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()
