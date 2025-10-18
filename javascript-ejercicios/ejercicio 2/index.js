const lista = document.getElementById("lista")
const texto = document.getElementById("texto")
const btnAgregar = document.getElementById("btnAgregar")
const btnPromedio = document.getElementById("btnPromedio")

const resultado = document.getElementById("resultado")

btnAgregar.addEventListener("click", agregarElemento)


function agregarElemento () {
  const items = lista.childElementCount
  if (items < 10) {
    const li = `<li class="list-group-item">${texto.value}</li>`
    lista.innerHTML += li
  }
  texto.value = ""
  console.log(lista.children)

  for (let i = 0; i < 7; i++) {
    console.log(i)
  }

}

btnPromedio.addEventListener("click", calcularPromedio)

function calcularPromedio () {
  let suma = 0
  const items = lista.children
  for (let i = 0; i < items.length; i++) {
    suma += Number(items[i].innerText)
  }
  resultado.innerText = suma / items.length
}