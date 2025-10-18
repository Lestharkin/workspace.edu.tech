function sumar (num1, num2) {
  return num1 + num2
}

function restar (num1, num2) {
  return num1 - num2
}

function multiplicar (num1, num2) {
  return num1 * num2
}

function dividir (num1, num2) {
  return num1 / num2
}

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const btnSumar = document.getElementById("btnSumar")
const btnRestar = document.getElementById("btnRestar")
const btnMultiplicar = document.getElementById("btnMultiplicar")
const btnDividir = document.getElementById("btnDividir")
const resultado = document.getElementById("resultado")

btnSumar.addEventListener("click", function () {
  const suma = sumar(Number(num1.value), Number(num2.value))
  resultado.textContent = `${suma}`
})

btnRestar.addEventListener("click", function () {
  const resta = restar(Number(num1.value), Number(num2.value))
  resultado.textContent = `${resta}`
})

btnMultiplicar.addEventListener("click", function () {
  const multi = multiplicar(Number(num1.value), Number(num2.value))
  resultado.textContent = `${multi}`
})

btnDividir.addEventListener("click", function () {
  if (num2.value === "0") {
    resultado.textContent = `Error: División por cero`
    return
  }
  const division = dividir(Number(num1.value), Number(num2.value))
  resultado.textContent = `${division}`
})