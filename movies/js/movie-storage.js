import { getMovies, getCharacterName } from './movie-fetch.js'

let moviesStorage = []
let index = 0

const loadMovies = async () => {
  const movies = await getMovies()
  const movies2 = movies.map(async movie => {
    const characterNames = await movie.characters.map(async url => {
      const name = await getCharacterName(url)
      return name
    })
    return {
      title: movie.title,
      episode_id: movie.episode_id,
      opening_crawl: movie.opening_crawl,
      director: movie.director,
      producer: movie.producer,
      release_date: movie.release_date,
      characters: await Promise.all(characterNames)
    }
  })
  moviesStorage = await Promise.all(movies2)
}

const nextIndex = () => {
  index = index < moviesStorage.length - 1 ? index + 1 : index
}

const prevIndex = () => {
  index = index > 0 ? index - 1 : index
}

const getIndex = () => index

const getStoredMovies = () => {
  return moviesStorage
}

const saveMovies = () => {
  localStorage.setItem('moviesStorage', JSON.stringify(moviesStorage))
}

const readMovies = () => {
  moviesStorage = JSON.parse(localStorage.getItem('moviesStorage'))
}

const initStorage = async () => {
  readMovies()
  if (moviesStorage === null) {
    await loadMovies()
    saveMovies()
  }
}


export { initStorage, getStoredMovies, prevIndex, nextIndex, getIndex }