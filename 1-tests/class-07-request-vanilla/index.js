const https = require('https')

const url = 'https://swapi.dev/api/planets/1/'
const url2 = 'https://swapi.dev/api/people/12ss/'
;
(async() => {
  const response = await https.get(url2, response => {
    response.on('data', data => console.log(JSON.parse(data)))
    response.on('error', error => console.log(error))
  })
})()
