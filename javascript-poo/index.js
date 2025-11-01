import Person from "./Person.js"
import Junior from "./Junior.js"

const lenin = new Person("Lenin")
console.log(lenin.name)
lenin.age = 34
console.log(lenin.greet())

const ana = new Junior("Ana", 28)
console.log(ana.name)
console.log(ana.greet())

console.log(Junior.yell())


