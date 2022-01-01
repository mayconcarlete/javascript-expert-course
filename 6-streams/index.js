// primeiro

// const stdin = process.stdin
//   .on('data', msg => console.log('Dados de entrada: ', msg.toString()))


// const stdout = process.stdout
//   .on('data', msg => console.log('data saida: ', msg.toString()))

// stdin.pipe(stdout)

// const http = require( 'http')
const { readFileSync, createReadStream } = require( 'fs')
// const {join} = require( 'path')
// // node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file

// const pathFile = join(__dirname, 'big.file')

// // segundo

// http.createServer((req, res) => {
//   // const file = readFileSync(pathFile)
//   // res.write(file)
//   // res.end()
//   createReadStream(pathFile)
//   .pipe(res)
// }).listen(3000, () => console.log('Running at 3000'))



// terceiro
// node -e "process.stdin.pipe(require('net').connect(1338))"
const net = require('net')
net.createServer(socket => socket.pipe(process.stdout)).listen(1338)
