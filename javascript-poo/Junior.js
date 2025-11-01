import Person from './Person.js'

export default class Junior extends Person {

  constructor (name, age) {
    super(name)
    this.age = age
  }

  static yell () {
    console.log('WAAAAAA!!!')
  }
}