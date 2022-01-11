import {createServer} from 'http'

const server = createServer()
  .listen(3000, () => console.log('We are running at port 3000'))

server.on('request',(req: any, res: any) => {
  console.log('chegou request')
  res.writeHead(200, {'Content-Type':'application/json'})
  res.write(JSON.stringify({message: 'hello world'}))
  res.end()
})

// const setA = new Set([1, 2, 3, 4, 3,3]);
// const setB = new Set([3, 4, 5, 6]);

// const arrA = Array.from(setA)
// const arrB = Array.from(setB)

// const result = arrA.filter(val => !arrB.includes(val))

// console.log(result)