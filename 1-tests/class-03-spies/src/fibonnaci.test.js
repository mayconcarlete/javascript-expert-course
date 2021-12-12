const Fibonacci = require('./fibonnaci')
const sinon = require('sinon')
const assert = require('assert')
;
const Fibonnaci = require('./fibonnaci');


(async() => {
  {
    const fibonnaci = new Fibonnaci()
    const spy = sinon.spy(fibonnaci, fibonnaci.execute.name)
    for await(const i of fibonnaci.execute(3)){}
    const expectedCallCount = 4
    assert.deepStrictEqual(spy.callCount, expectedCallCount)
  }
  {
    const fibonnaci = new Fibonnaci()
    const spy = sinon.spy(fibonnaci, fibonnaci.execute.name)

    const [ ...results ] = fibonnaci.execute(5)
    const { args } = spy.getCall(2)
    const expectResult = [0, 1, 1, 2, 3]
    const expectedParams = Object.values({
      input: 3,
      current: 1,
      next: 2
    })
    assert.deepStrictEqual(spy.callCount, 6),
    assert.deepStrictEqual(args, expectedParams)
    assert.deepStrictEqual(results, expectResult)
  }
})()