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
