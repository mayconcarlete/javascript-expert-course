const http = require('http')

const routes = {
  '/contact:get': (request, response) => {
    response.write('Contact us page')
    return response.end()
  },
  default: (request, response) => {
    response.write('Hello Worldao')
    return response.end()
  }
}

const handler = (request, response) => {
  const { url, method } = request
  const routeKey = `${url}:${method}`.toLocaleLowerCase()
  console.log(routeKey)
  const chosen = routes[routeKey] || routes.default
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  return chosen(request, response)
}

const PORT = 3000

const server = http.createServer(handler).listen(PORT, () => {
  console.log(`We are online at port: ${PORT}`)
})

module.exports = server