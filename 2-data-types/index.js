// Seven differents of primitive expectTypes
// String, number,  bigint, boolean, symbol, null and undefined

let a = 1
let b = a
b+=1
console.assert(a===1, 'Error: a value is different')
let obj1 = {a:1}
let obj2 = obj1

obj1.a +=1

console.assert(obj2.a === 2, 'Error: object is different')


console.assert(String(123) === '123', 'Error: cant convert type')

const item = {
  name: 'Maycon',
  age: 31,
  toString(){
    return `Name: ${this.name}, Age: ${this.age}`
  }
}
console.log('item: ', item + 0)

const item2 = {
  name: 'Maycon',
  age: 31,
  toString(){
    return `Name: ${this.name}, Age: ${this.age}`
  },
  valueOf(){
    return 007
  }
}
console.log('item: ', item2 + 0)
console.log('item: ', ''.concat(item2) + 0)