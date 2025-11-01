export default class Person {
  name
  age

  constructor (name) {
    this.name = name
    this.age = Number.NaN
  }

  greet () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}