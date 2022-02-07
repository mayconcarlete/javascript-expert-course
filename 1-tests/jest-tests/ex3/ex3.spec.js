const validations = require('./ex3')
const { validateCPF } = require('./ex3')

jest.mock('./ex3', () => ({
  validateEmail: () => false
}))

describe('should rewrite the module', () => {
  it('should mock the function and return false', () => {
    const email = 'valid@mail.com'

    const result = validations.validateEmail(email)

    expect(result).toBeFalsy()
  })
  it('should mock now the function', () => {
    const email = 'any@mail.com'
    jest.spyOn(validations, 'validateEmail').mockImplementationOnce(() => true)

    const result = validations.validateEmail(email)

    expect(result).toBeTruthy()
  })

  it('should validate cpf', () => {
    const mockedFn = jest.fn(validateCPF)
    mockedFn.mockImplementationOnce(() => false)
    const cpf = '123.123.123.12'
    const result = mockedFn(cpf)

    expect(result).toBeFalsy()
  })
})