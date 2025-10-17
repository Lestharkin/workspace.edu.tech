function sumar (num1, num2) {
  return num1 + num2
}

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const btnSumar = document.getElementById("btnSumar")
const resultado = document.getElementById("resultado")

btnSumar.addEventListener("click", function () {
  const suma = sumar(Number(num1.value), Number(num2.value))
  resultado.textContent = `${suma}`
})