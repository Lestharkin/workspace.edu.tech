import { getMovieTemplate } from './movie-template.js'

const getMovies = () => {
  const movies = document.querySelector('movies')
  const response = fetch('https://swapi.info/api/films')
  response.then(res => {
    const resultado = res.json()
    resultado.then(async data => {
      for (const movie of data) {
        movies.innerHTML += await getMovieTemplate(movie)
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

export { getMovies, getCharacterName }