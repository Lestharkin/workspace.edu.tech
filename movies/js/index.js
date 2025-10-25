const movies = document.querySelector('movies')

const movieTemplate = async (movie) => `
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
  ${await charactersTemplate(movie.characters)}
  </ul>
</div>`

const charactersTemplate = async (characters) => {
  let listItems = ''
  for (const character of characters) {
    const characterName = await getCharacterName(character)
    listItems += `<li class="list-group-item">${characterName}</li>`
  }
  return listItems
}

const getMovies = () => {
  const response = fetch('https://swapi.info/api/films')
  response.then(res => {
    const resultado = res.json()
    resultado.then(async data => {
      for (const movie of data) {
        movies.innerHTML += await movieTemplate(movie)
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


