import { getMovies } from './movie-fetch.js'

let moviesStorage = []

const loadMovies = async () => {
  const movies = await getMovies()
  const movies2 = movies.map(async movie => {
    const characterNames = movie.characters.map(async url => {
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