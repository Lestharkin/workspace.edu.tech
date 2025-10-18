const lista = document.getElementById("lista")
const texto = document.getElementById("texto")
const btnAgregar = document.getElementById("btnAgregar")

function agregarElemento () {
  const li = `<li class="list-group-item">${texto.value}</li>`
  lista.innerHTML += li
}

btnAgregar.addEventListener("click", agregarElemento)