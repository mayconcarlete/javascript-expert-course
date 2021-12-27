const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('event1', (...args) => console.log('hello from event 1'))
emitter.on('event1', (...args) => {
  console.log(`hello from event 1: ${args}`)
  console.log(args)
})

module.exports = emitter