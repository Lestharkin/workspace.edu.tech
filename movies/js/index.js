import { initStorage, getStoredMovies, prevIndex, nextIndex, getIndex } from './movie-storage.js'
import { getMovieTemplate, paginationBtnTemplate } from './movie-template.js'

const render = async () => {
  const movies = getStoredMovies()
  const moviesHTML = document.querySelector('movies')
  moviesHTML.innerHTML = await getMovieTemplate(movies[getIndex()])
  moviesHTML.appendChild(paginationBtnTemplate(prevIndex, nextIndex, render))
}

try {
  await initStorage()
  await render()
} catch (error) {
  console.error('Error initializing app:', error)
  process.exit(1)
}