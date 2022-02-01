const {add} = require('./ex1')

describe('First test suit', () => {
 it('should test jest mock', () => {
   const mock = jest.fn((data) => data)

   const result = mock('foo')

   expect(result).toBe('foo')
   expect(mock).toHaveBeenCalled()
   expect(mock).toHaveBeenCalledWith('foo')
   expect(mock).toHaveBeenCalledTimes(1)
  })
  it('should mock add', () => {
    // const mock = jest.fn(add)
    jest.spyOn(calc, 'add').mockReturnValue(3)
    const result = calc.add(1, 1)

    expect(result).toBe(3)
  })
  it('should mock add just with function', () => {
    const mock = jest.fn(add).mockReturnValue(4)
    // jest.spyOn(calc, 'add').mockReturnValue(3)
    const result = mock(1, 1)

    expect(result).toBe(4)
  })
})
