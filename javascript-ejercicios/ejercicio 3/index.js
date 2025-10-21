const inp = document.querySelector('#in')
const btn = document.querySelector('#btn')
const out = document.querySelector('#out')
const tbody = document.querySelector('#tbody')

// function pares (num) {
//   const resultados = []
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       resultados.push(i)
//     }
//   }
//   return resultados
// }

// btn.addEventListener('click', function () {
//   const val = inp.value
//   const res = pares(Number(val))
//   out.innerText = res
// })

function pintarFilaTablaMultiplicar (num, multiplicador) {
  const resultado = num * multiplicador
  return `<tr>
            <td>${num}</td>
            <td>X</td>
            <td>${multiplicador}</td>
            <td>=</td>
            <td>${resultado}</td>
          </tr>`
}

btn.addEventListener('click', function () {
  const val = inp.value
  tbody.innerHTML = ''
  for (let i = 1; i <= 10; i++) {
    tbody.innerHTML += pintarFilaTablaMultiplicar(Number(val), i)
  }
})


const cajita = document.querySelector('#cajita')
const btnColor = document.querySelector('#btn-color')

const colores = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'pink',
  'orange'
]

btnColor.addEventListener('click', function () {
  const indiceAleatorio = Math.floor(Math.random() * colores.length)
  const colorAleatorio = colores[indiceAleatorio]
  cajita.style.backgroundColor = colorAleatorio
})
