import { loadMovies, getStoredMovies } from './movie-storage.js'

(async () => {
  await loadMovies()
  console.log(getStoredMovies())
})()
