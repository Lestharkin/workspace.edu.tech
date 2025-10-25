import { initStorage, getStoredMovies } from './movie-storage.js'

(async () => {
  await initStorage()
  console.log(getStoredMovies())
})()
