const { join } = require('path')
const { writeFile } = require('fs/promises')
const faker = require('faker')

const Car = require('../src/entitites/car')
const CarCategory = require('../src/entitites/car-category')
const Customer = require('../src/entitites/customer')

const seederSaveFolder = join(__dirname, '../', 'database')
const NUMBER_OF_CARS = 3

const carCategory = new CarCategory({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 200)
})

const cars = []
const customers = []
for(let i = 0; i < NUMBER_OF_CARS; i++){
  const car = new Car({
    id: faker.datatype.uuid(),
    name: faker.vehicle.vehicle(),
    releaseYear: faker.date.past().getFullYear(),
    available: true,
    gasAvailable: true,
  })
  carCategory.carIds.push(car.id)
  cars.push(car)

  const customer = new Customer({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    age: faker.datatype.number({min: 18, max:50})
  })
  customers.push(customer)
}
const write = (filename, data) => writeFile(join(seederSaveFolder, filename), JSON.stringify(data))
;(
  async() => {
    await write('cars.json', cars)
    await write('customers.json', customers)
    await write('car-categories.json', [carCategory])
    console.log('cars:', cars)
    console.log('categories:', carCategory)
    console.log('customers:', customers)
  }
)()