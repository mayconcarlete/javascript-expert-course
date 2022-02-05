const axios = require('axios')

jest.mock('axios')

const { facetec, Person, validateEmail, makeRequest } = require('./service')
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

  it('should return false when validateEmail fails', () => {
    const validateMock = jest.fn(validateEmail).mockImplementationOnce((email) => false)

    const result = validateMock('invalid@mail.com')

    expect(result).toBeFalsy()
  })

  it('should mock return to an email', () => {
    const mockValidateEmail = jest.fn(validateEmail).mockImplementationOnce((email) => 'valid@mail.com')

    const result = mockValidateEmail('any@mail.com')

    expect(result).toEqual('valid@mail.com')
  })

  it('it should return mocked data when makeRequest is called', async() => {
    axios.get.mockResolvedValue({data:{message:'ok'}})
    const result = await makeRequest()
    expect(result.data).toEqual({message: 'ok'})
  })
  it('should return different values given different urls',async()=> {
    axios.get.mockImplementation(async (url) => {
      if(url === 'a') return Promise.resolve({message: 'a'})
      if(url === 'b') return Promise.resolve({message: 'b'})
      return Promise.resolve({message: 'c'})
    })
    const resultA = await makeRequest('a')
    const resultB = await makeRequest('b')
    const resultC = await makeRequest('c')

    expect(resultA).toEqual({message: 'a'})
    expect(resultB).toEqual({message: 'b'})
    expect(resultC).toEqual({message: 'c'})
  })
})