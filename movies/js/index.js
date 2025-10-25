import { initStorage, getStoredMovies } from './movie-storage.js'
import { getMovieTemplate } from './movie-template.js'

(async () => {
  await initStorage()
  const moviesHTML = document.querySelector('movies')
  const movies = getStoredMovies()

  moviesHTML.innerHTML = await getMovieTemplate(movies[3])

})()
