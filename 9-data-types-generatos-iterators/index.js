const assert = require('assert')

function* calculation(arg1, arg2){
  yield arg1 * arg2
}

function* main(){
  yield 'Hello'
  yield '-'
  yield 'World'
  yield* calculation(10, 10)
}

const generator = main()

assert.deepStrictEqual(generator.next(), {value: 'Hello', done: false})
assert.deepStrictEqual(generator.next(), {value: '-', done: false})
assert.deepStrictEqual(generator.next(), {value: 'World', done: false})
assert.deepStrictEqual(generator.next(), {value: 100, done: false})
assert.deepStrictEqual(generator.next(), {value: undefined, done: true})

// using Array.from to get all results
assert.deepStrictEqual(Array.from(main()), ['Hello', '-', 'World', 100])
// using rest spread operator
assert.deepStrictEqual([...main()], ['Hello', '-', 'World', 100])


// async iterators
const {readFile, stat, readdir} = require('fs/promises')
function* promisified(){
    yield readFile(__filename)
    yield Promise.resolve('Hey dude')
  }

// Promise.all([...promisified()]).then(result => console.log(result))
// ;
// (
//   async() => {
//     for await (const result of promisified()){
//         console.log(result.toString())
//     }
//   }
// )()

async function* systemInfo(){
  const file = await readFile(__filename)
  yield { file: file.toString() }
}

;
(
  async() => {
    for await (const result of systemInfo()){
        console.log(result.toString())
    }
  }
)()

// fato interessante sobre os generators, caso voce coloque um return dentro de uma função generator, o ultimo objeto
// chamado pelo next sera o return e o done: true eg: {value: foo, done: true}
// quando eu chamava só pelo next e sem nenhum return na função o value ficava sempre undefined {value: undefined, done: true}