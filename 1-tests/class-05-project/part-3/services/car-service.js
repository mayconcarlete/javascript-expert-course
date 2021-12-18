const BaseRepository = require('../repository/base/base')
const Tax = require('./../src/entitites/tax')

class CarService{
  constructor({cars}){
    this.carRepository = new BaseRepository({file: cars})
    this.taxBasedOnAge = Tax.taxesBasedOnAge
    this.currencyFormat = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }


  getRandomPositionFromArray(list){
    const listLength = list.length
    return Math.floor(Math.random()* listLength)
  }

  chooseRandomCar(carCategory){
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds)
    const carId = carCategory.carIds[randomCarIndex]
    return carId
  }

  async getAvailableCar(carCategory){
    const carId = this.chooseRandomCar(carCategory)
    const car = await this.carRepository.find(carId)
    return car
  }

  calculateFinalPrice(customer, carCategory, numberOfDays){
    const {age} = customer
    const {then: tax} = this.taxBasedOnAge.find(tax => age >= tax.from && age <= tax.to)
    const finalPrice = ((tax*carCategory.price)*numberOfDays)
    const formattedPrice = this.currencyFormat.format(finalPrice)

    return formattedPrice
  }
}

module.exports = CarService