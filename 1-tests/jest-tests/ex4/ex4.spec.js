const Calculator = require('./ex4')

describe('Calculator', () => {
  it('should return the sum', () => {
    const response = Calculator.sum(1, 1)
    expect(response).toBe(2)
  })
  it('should return the difference between a and b', async() => {
    const response = await Calculator.sub(1,1)
    expect(response).toBe(0)
  })
  it('should mock sub and return true', async() => {
    const calculatorSpy = jest.spyOn(Calculator, 'sub')
    calculatorSpy.mockResolvedValueOnce(true)
    const response = await Calculator.sub(2, 3)
    expect(calculatorSpy).toHaveBeenCalledWith(2,3)
    expect(response).toBe(true)
  })
  it('should mock sum to return true when sub is called', async() => {
    const calculatorSpy = jest.spyOn(Calculator, 'sum')
    calculatorSpy.mockResolvedValueOnce(true)
    const response = await Calculator.sub(3, 3)
    expect(calculatorSpy).toHaveBeenCalledWith(3, 3)
    expect(response).toBe(true)
  })
})