const input = document.getElementsByTagName('input')[0]

const p = document.getElementsByTagName('p')[0]

p.innerText = input.value

const output = document.getElementsByClassName('output')[0]

output.innerText = input.value

const otra = document.getElementById('otra')

otra.innerText = input.value

// Alternative using querySelectorAll
/*
muchas
muchas
*/
const h1s = document.querySelectorAll('h1')
const h11 = h1s[0]
h11.innerText = 'Hello from UPB again'

const h1 = document.querySelector('.output #otra')
h1.style.color = 'red'