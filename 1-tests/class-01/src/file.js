const { readFile } = require('fs/promises')
const { error } = require('./constants')
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id','name','profession','age']
}

class File {
  static async csvToJson(filePath){
    const content = await this.getFileContent(filePath)
    const validation = File.isValid(content)
    if(!validation.valid) throw new Error(validation.error)
    return content
  }

  static async getFileContent(filePath){
    return (await readFile(filePath)).toString('utf-8')
  }

  static isValid(csvString, option = DEFAULT_OPTION){
    const [header, ...fileWithoutHeader] = csvString.split('\n')
    const isHeaderValid = header === option.fields.join(',')
    if(!isHeaderValid){
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE
      }
    }
    const isContentLengthAccepted = (
      fileWithoutHeader.length > 1 &&
      fileWithoutHeader.length <= option.maxLines +1
    )
    if(!isContentLengthAccepted){
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE
      }
    }
    return { valid: true }
  }
}

module.exports = File
