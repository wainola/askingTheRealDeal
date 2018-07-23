const http = require('http')
const generator = require('./generator')
const port = 9000
const router = (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', ' *')
  switch (request.url) {
    case '/api/generator':
      console.log('[GET]:: /api/generator')
      generator(request, response)
      break
    default:
      break;
  }
}

const server = http.createServer(router)
server.listen(port, (err) => {
  if(err) return console.info('Something happened', err)
  console.info(`Server is listening on ${port}`)
})