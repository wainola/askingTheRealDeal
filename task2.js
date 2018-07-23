// ENCUENTRA ALGO EXTRAÑO EN ESTA FUNCION?
const callback = (result) => {
  response.writeHead('200', { 'Content-Type': 'application/json'})
  response.end(JSON.stringify({msg: 'some msg'}))
}