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
