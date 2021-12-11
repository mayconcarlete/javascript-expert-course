const sinon = require('sinon')
const {deepStrictEqual} = require('assert')
const Service = require('./service')
const BASE_URL1 = 'https://swapi.dev/api/planets/1/'
const BASE_URL2 = 'https://swapi.dev/api/planets/2/'
const mocks = {
  tatooine: require('../mocks/tatooine.json'),
  alderaan: require('../mocks/alderaan.json')
}
;
(async() => {
  // {
  //   // vai para internet
  //   const service = new Service()
  //   const response = await service.makeRequest(BASE_URL1)
  //   console.log(JSON.stringify(response))
  // }
  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)
  stub.withArgs(BASE_URL1).resolves(mocks.tatooine)
  stub.withArgs(BASE_URL2).resolves(mocks.alderaan)

  {
    const expected = {
      name: 'Tatooine',
      surfaceWater: '1',
      appeardIn: 5
    }
    const result = await service.getPlanets(BASE_URL1)
    deepStrictEqual(result, expected)
  }

  {
    const expected = {
      name: 'Alderaan',
      surfaceWater: '40',
      appeardIn: 2
    }
    const result = await service.getPlanets(BASE_URL2)
    deepStrictEqual(result, expected)
  }
})()