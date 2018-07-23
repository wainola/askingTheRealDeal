module.exports = (request, response) => {
  console.log('generator')
  let resp = generador()
  for(let elem of resp){
    if(elem === 'dos'){
      response.writeHead('200', {'Content-Type': 'application/json'})
      response.end(JSON.stringify({msg: 'El numero el iterador es dos'}))
    }
  }
}

function* generador(){
  let arr = ['uno', 'dos', 'tres']
  yield arr[0]
  yield arr[1]
  yield arr[2]
}
