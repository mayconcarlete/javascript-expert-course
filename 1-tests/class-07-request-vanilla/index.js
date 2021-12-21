const https = require('https')

const url = 'https://swapi.dev/api/planets/1/'
const url2 = 'https://swapi.dev/api/people/1/'
;
// (async() => {
//   const response = await https.get(url2, response => {
//     response.on('data', data => console.log(JSON.parse(data)))
//     response.on('error', error => console.log(error))
//   })
// })()

const makeRequest = () => {
  return new Promise((resolve, reject) => {
    https.get(url2, response => {
      response.on('data', data => resolve(JSON.parse(data)))
      response.on('error', error => resolve(JSON.parse(error)))
    })
  })
}

async function getStarWars(){
  const response = await makeRequest()
  return response
}
(
  async() => {
    response = await getStarWars()
    console.log(response)
  }
)()