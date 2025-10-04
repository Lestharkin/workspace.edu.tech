function fn () {
  console.log('app3')
}

function sumar (numero1, numero2) {
  console.log(numero1 + numero2)
}

sumar(2, 3)
console.log(resta(3, 2))

function resta (numero1, numero2) {
  return numero1 - numero2
}

console.log(resta(8, 5))

let resultadoResta = resta(10.29282, 7)

console.log(resultadoResta)