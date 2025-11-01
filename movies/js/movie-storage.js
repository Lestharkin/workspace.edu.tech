import { getMovies, getCharacterName } from './movie-fetch.js'

let moviesStorage = []
let repoDate = new Date("2000")
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
  index = index < moviesStorage.length - 1 ? index + 1 : 0
}

const prevIndex = () => {
  index = index > 0 ? index - 1 : moviesStorage.length - 1
}

const getIndex = () => index

const getStoredMovies = () => {
  return moviesStorage
}

const saveMovies = () => {
  localStorage.setItem('moviesStorage', JSON.stringify({
    repoDate: Date.now(),
    moviesStorage: moviesStorage
  }))
}

const readMovies = () => {
  const data = JSON.parse(localStorage.getItem('moviesStorage'))
  if (data) {
    repoDate = new Date(data.repoDate)
    moviesStorage = data.moviesStorage
    return
  }
  repoDate = new Date("2000")
  moviesStorage = null
}

const initStorage = async () => {
  readMovies()
  if (moviesStorage === null) {
    await loadMovies()
    saveMovies()
    return
  }

  const repoDatePlus24Hours = new Date(repoDate).getTime() + (24 * 60 * 60 * 1000)

  if (repoDatePlus24Hours < Date.now()) {
    await loadMovies()
    saveMovies()
  }
}

const searchMovies = (query) => {
  query = String(query).trim()
  readMovies()
  console.log('Searching for:', query)
  const results = moviesStorage.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.opening_crawl.toLowerCase().includes(query.toLowerCase()) ||
    movie.release_date.toLowerCase().includes(query.toLowerCase())
  )
  moviesStorage = results ?? []
  index = 0
}


export { initStorage, getStoredMovies, prevIndex, nextIndex, getIndex, searchMovies }