const numbers = [1, 2, 3, 4, 5]


// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// for (let number of numbers) {
//   console.log(number)
// }

// for (let i in numbers) {
//   console.log(numbers[i])
// }


// let i = 0
// let j = 3
// while (i < 10 || j < 4) {
//   console.log('Hello World')
//   i += 3
//   j++
// }

// let i = 0
// let j = 3
// do {
//   console.log('Hello World')
//   i += 3
//   j++
// } while (i < 10 && j < 4) 


let day = ""
switch (new Date().getDay()) {
  case 0:
    day = "Sunday"
    break
  case 1:
    day = "Monday"
    break
  case 2:
    day = "Tuesday"
    break
  case 3:
    day = "Wednesday"
    break
  case 4:
    day = "Thursday"
    break
  case 5:
    day = "Friday"
    break
  case 6:
    day = "Saturday"
    break
  default:
    day = "Invalid day"
}
console.log(day)