const faker = require('faker')

const Car = require('../src/entitites/car')
const CarCategory = require('../src/entitites/car-category')
const Customer = require('../src/entitites/customer')
const { join } = require('path')
const seederBaseFolder = join(__dirname, '../', 'database')

const carCategory = new CarCategory({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 200)
})

console.log(carCategory)