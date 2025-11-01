import { initStorage, getStoredMovies, prevIndex, nextIndex, getIndex } from './movie-storage.js'
import { getMovieTemplate, paginationBtnTemplate } from './movie-template.js'

const moviesHTML = document.querySelector('movies')

const render = async () => {
  moviesHTML.innerHTML = ''
  const movies = getStoredMovies()
  const buttons = paginationBtnTemplate(prevIndex, nextIndex, render)
  moviesHTML.innerHTML = await getMovieTemplate(movies[getIndex()])
  moviesHTML.appendChild(buttons)
}

try {
  await initStorage()
  await render()
} catch (error) {
  console.error('Error initializing app:', error)
  process.exit(1)
} finally {
  console.log('App initialized')
}
