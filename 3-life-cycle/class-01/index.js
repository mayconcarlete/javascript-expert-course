'use strict';

class Person {
  sayHello(name){
    console.log(`Hello ${name}`)
  }
}

const person = new Person()
person.sayHello('Maycon')

function sayHi(name){
  console.log(`Hi ${name}`)
}

person.sayHello = sayHi

person.sayHello('Maycon')