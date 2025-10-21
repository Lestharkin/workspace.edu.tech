const inp = document.querySelector('#in')
const btn = document.querySelector('#btn')
const out = document.querySelector('#out')

function pares (num) {
  const resultados = []
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      resultados.push(i)
    }
  }
  return resultados
}

btn.addEventListener('click', function () {
  const val = inp.value
  const res = pares(Number(val))
  out.innerText = res
})