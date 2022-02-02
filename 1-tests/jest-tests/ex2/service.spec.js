const { facetec, Person } = require('./service')

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
})