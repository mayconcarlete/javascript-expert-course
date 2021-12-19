const http = require('http')
const {join} = require('path')
const CarService = require('./../../class-05-project/part-3/services/car-service')
const carPath = join(__dirname, './../../class-05-project/part-3/database', 'cars.json')
const customerPath = join(__dirname, './../../class-05-project/part-3/database', 'customers.json')
const carCategoryPath = join(__dirname, './../../class-05-project/part-3/database', 'car-categories.json')

const mocks = {
  cars: require(carPath),
  customers: require(customerPath),
  carCategory: require(carCategoryPath)
}

const routes = {
  '/rent:post': async (request, response) => {
    const carService = new CarService({cars: carPath})
    console.log(mocks.cars)
    console.log(mocks.carCategory)
    console.log(mocks.customers)

    const result = await carService.rent(mocks.customers[0], mocks.carCategory[0], 5)
    response.write(JSON.stringify({car: result}))
    return response.end()
  }
}

const handler = async(request, response) => {
  const {url, method} = request
  const routePath = `${url}:${method}`.toLocaleLowerCase()
  const chosen = routes[routePath]

  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  return await chosen(request, response)
}

const PORT = 3000
const server = http.createServer(handler)

server.listen(PORT, () => {
  console.log('server is running on port: ', PORT)
})