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

const msgTemplate = (message) => `<div class="col-sm-12">
  <h4 class="alert alert-danger">${message}</h4>
</div>`

const charactersTemplate = async (characterNames) => {
  let listItems = ''
  for (const characterName of characterNames) {
    listItems += `<li class="list-group-item">${characterName}</li>`
  }
  return listItems
}

const paginationBtnTemplate = (prevIndex, nextIndex, render) => {
  const div = document.createElement('div')
  div.classList.add('d-flex', 'justify-content-between', 'my-4')
  const btnNext = document.createElement('button')
  btnNext.classList.add('btn', 'btn-primary')
  const btnPrev = document.createElement('button')
  btnPrev.classList.add('btn', 'btn-primary')
  btnNext.innerHTML = 'Siguiente'
  btnPrev.innerHTML = 'Anterior'
  btnNext.addEventListener('click', () => {
    nextIndex()
    render()
  })
  btnPrev.addEventListener('click', () => {
    prevIndex()
    render()
  })
  div.appendChild(btnPrev)
  div.appendChild(btnNext)
  return div
}

export { getMovieTemplate, paginationBtnTemplate, msgTemplate }