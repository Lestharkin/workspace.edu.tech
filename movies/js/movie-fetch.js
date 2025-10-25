const FILMS_URL = 'https://swapi.info/api/films'

const getMovies = async () => {
  const response = await fetch(FILMS_URL)
  return await response.json()
}

const getCharacterName = async (characterUrl) => {
  const response = await fetch(characterUrl)
  const data = await response.json()
  return data.name
}

export { getMovies, getCharacterName }