import {createServer} from 'http'

const server = createServer()
  .listen(3000, () => console.log('We are running at port 3000'))

server.on('request',(req: any, res: any) => {
  console.log('chegou request')
  res.writeHead(200, {'Content-Type':'application/json'})
  res.write(JSON.stringify({message: 'hello world'}))
  res.end()
})