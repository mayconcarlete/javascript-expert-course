const http = require('http');

// Create a local server to receive data from
const server = http.createServer();

const routerPaths = {
  '/maycon:get': (request, response) => {
    response.end(JSON.stringify({
      data: 'Hello World!'
    }));
  },
  default: (request, response) => {
    response.end(JSON.stringify({
      data: 'Hello default!'
    }));
  }
}


// Listen to the request event
server.on('request', (request, res) => {
  const {url, method} = request
  console.log(url, method)
  const path = `${url}:${method}`.toLocaleLowerCase()
  console.log('Looking for: ', path)
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const getFunctionRoute = routerPaths[path]
  // routerPaths.default(request, res)
  routerPaths['/maycon:get'](request, res)
});

server.listen(3000);