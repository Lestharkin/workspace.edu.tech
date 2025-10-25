const movies = document.querySelector('movies')

const movieTemplate = movie => `
<div class="col-sm-12">
  <h2>Star Wars: ${movie.title}</h2>
  <h5>Fecha de estreno: ${movie.release_date}</h5>
  <p>${movie.opening_crawl}</p>
  <ul>
    <li>Director: ${movie.director}</li>
    <li>Productor: ${movie.producer}</li>
  </ul>
  <h3>Personajes</h3>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Luke Skywalker</li>
    <li class="list-group-item">Princess Leia</li>
    <li class="list-group-item">Han Solo</li>
    <li class="list-group-item">Darth Vader</li>
    <li class="list-group-item">Obi-Wan Kenobi</li>
    <li class="list-group-item">R2-D2</li>
    <li class="list-group-item">C-3PO</li>
  </ul>
</div>`

const getMovies = () => {
  const response = fetch('https://swapi.info/api/films')
  response.then(res => {
    const resultado = res.json()
    resultado.then(data => {
      for (const movie of data) {
        movies.innerHTML += movieTemplate(movie)
      }
    }).catch(err => {
      console.log(err)
    })
  }).catch(err => {
    console.log(err)
  })

}

const getCharacterName = async (characterUrl) => {
  const response = await fetch(characterUrl)
  const data = await response.json()
  return data.name
}

getMovies()


