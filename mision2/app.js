console.log('App is starting...')

let products = []
const productsList = document.querySelector('products-list')
const inputSearch = document.querySelector('#search-input')
const btnSearch = document.querySelector('#search-button')

btnSearch.addEventListener('click', () => {
  const searchTerm = inputSearch.value.toLowerCase()
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm))
  fillProducts(filteredProducts)
})

const fetchProducts = async () => {
  const response = await fetch('./product.json')
  const data = await response.json()
  return data
}

const fillProducts = (products) => {
  const template = products.map(product => `
  <div>
    <h4>${product.name}</h4>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <p>Category: ${product.category}</p>
    <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid">
  </div>`).join('')
  productsList.innerHTML = template
}

try {
  (async () => {
    products = await fetchProducts()
    fillProducts(products)
  })()

} catch (error) {
  console.error('Error fetching products:', error)
}