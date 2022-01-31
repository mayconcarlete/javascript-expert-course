const http = require('http')
const PORT = 3000
const { promisify } = require('util')
const  {pipeline} = require('stream')

const pipelineAsync = promisify(pipeline)

const { sum } = require('./index')
let counter = 0
http.createServer(async (req, res) => {
  try{
    await pipelineAsync(
      req,
      async function * (source){
        source.setEncoding('utf-8')
        for await(const body of source){
          console.log(`Contador: ${++counter} - requests`, body.toString())
          // debugger
          const item = JSON.parse(body)
          const result = sum(...Object.values(item))
          console.log(result)
          yield `Resultado: ${result} \n`
        }
      },
      res
    )
  }catch(e){
    console.log('Deu ruim: ', e)
  }
}).listen(PORT, () => {
  console.log('estamos online')
})