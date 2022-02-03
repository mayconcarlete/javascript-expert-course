const { facetec, Person, validateEmail } = require('./service')
// jest.mock('./service')
describe('test service', () => {
  it('should call facetec with correct params', () => {
    // const mockedFacetec = jest.fn(facetec.verifyFace)
    // Date.now = jest.fn(() => '2021-01-25T00:30:05.933Z')
    jest.spyOn(Date, 'now').mockImplementationOnce( () => 1)
    const response = facetec.verifyFace('z', 'x')

    expect(response).toBe('2021-01-25T00:30:05.933Z')
  })
  it('should mock correctly the method class', () => {
    const sut = new Person()

    const response = sut.validate('mail@mail.com')

    expect(response).toBe(true)
  })

  it('should return false mocking correctly', () => {
    const sut = new Person()

    jest.spyOn(sut, 'isValid').mockReturnValueOnce(false)

    const response = sut.validate('mail@mail.com')

    expect(response).toBeFalsy()
  })

  it('should return true when email is valid', () => {
    const validateMock = jest.fn(validateEmail)

    const result = validateMock('valid@mail.com')

    expect(result).toBeTruthy()
  })
})