const getMovies = () => {
  const response = fetch('https://swapi.info/api/films')

  response.then(res => {
    const resultado = res.json()


    resultado.then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })


  }).catch(err => {
    console.log(err)
  })

}

getMovies()


