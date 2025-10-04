const objInterno = {
  cadena: 'a',
}

const objeto = {
  num1: 1,
  num2: 2,
  obj2: objInterno,
  obj3: {
    texto: "este es otro objeto",
  }
}

console.log(objeto)
console.log(objeto.num1)
console.log(objeto.num2)

objeto.num1 = 1098
console.log(objeto.num1)
console.log(objeto.obj2.cadena)

