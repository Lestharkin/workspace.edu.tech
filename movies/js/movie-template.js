const getMovieTemplate = async (movie) => `
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

const charactersTemplate = async (characterNames) => {
  let listItems = ''
  for (const characterName of characterNames) {
    listItems += `<li class="list-group-item">${characterName}</li>`
  }
  return listItems
}

export { getMovieTemplate }