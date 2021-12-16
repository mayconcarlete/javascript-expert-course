const BaseRepository = require('../repository/base/base')

class CarService{
  constructor({cars}){
    this.carRepository = new BaseRepository(cars)
  }


  test(){
    return this.carRepository.find()
  }
}

module.exports = CarService