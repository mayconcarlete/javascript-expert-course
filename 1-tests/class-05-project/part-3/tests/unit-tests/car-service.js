const sinon = require('sinon')
const { describe, it, before, beforeEach, afterEach } = require('mocha')
const CarService = require('../../services/car-service')
const {join} = require('path')
const carsDatabase = join(__dirname, './../../database', 'cars.json')
const { expect } = require('chai')
const mocks = {
  validCarCateogry: require('../mocks/valid-category.json'),
  validCar: require('../mocks/valid-car.json'),
  validCustomer: require('../mocks/valid-customer.json')
}

describe('CarService Suit Tests', () =>{
  let carService = {}
  let sandBox = {}

  before(()=> {
    carService = new CarService({
      cars: carsDatabase
    })
  })

  beforeEach(() => {
    sandBox = sinon.createSandbox()
  })

  afterEach(() => {
    sandBox.restore()
  })

  it('should retrieve a random position from an array', () => {
    const data = [0,1,2,3,4]
    const result = carService.getRandomPositionFromArray(data)
    expect(result).to.be.lte(data.length).and.be.gte(0)
  })

  it('should choose the first id from carIds in carCategory', () => {
    const carCategory = mocks.validCarCateogry
    const carIndex = 0
    sandBox.stub(
      carService,
      carService.getRandomPositionFromArray.name
    ).returns(carIndex)

    const result = carService.chooseRandomCar(carCategory)

    const expected = carCategory.carIds[carIndex]
    expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok
    expect(result).to.be.equal(expected)
  })

  it('given a carCategory it should return an available car', async() => {
    const car = mocks.validCar
    const carCategory = Object.create(mocks.validCarCateogry)
    carCategory.carIds = [ car.id ]
    sandBox.stub(
      carService.carRepository,
      carService.carRepository.find.name,
    ).resolves(car)
    sandBox.spy(
      carService,
      carService.chooseRandomCar.name
    )

    const result = await carService.getAvailableCar(carCategory)

    const expected = car
    expect(carService.chooseRandomCar.calledOnce).to.be.ok
    expect(carService.carRepository.find.calledWithExactly(car.id))
    expect(result).to.be.deep.equal(expected)
  })
})