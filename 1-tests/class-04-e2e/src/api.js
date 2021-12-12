const http = require('http')
const DEFAULT_USER = { username: 'maykerops', password: '123' }
const routes = {
  '/contact:get': (request, response) => {
    response.write('Contact us page')
    return response.end()
  },
  '/login:post': async(request, response) => {
    // response é um iterador
    for await(const data of request){
      const user = JSON.parse(data)
      console.log(user)
      if(
          user.username !== DEFAULT_USER.username ||
          user.password !== DEFAULT_USER.password
      ){
        response.writeHead(401)
        response.write('Logging failed')
        return response.end()
      }
      response.writeHead(200)
      response.write('Logging has succeeded')
      response.end()
    }
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