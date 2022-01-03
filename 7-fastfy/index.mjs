import fastify from "fastify"

const server = fastify({logger:true})

server.get('/', async(request, reply) => {
  reply.code(201)
  return {
    message: 'hello world'
  }
})

const opts = {
  schema: {
    body: {
      type:'object',
      required:['requiredKey'],
      properties:{
        requiredKey: {
          type: 'array',
          maxItems: 3,
          items:{type: 'integer'}
        },
      }
    }
  }
}

server.post('/login', opts,async(request, reply) => {
  reply.code(203)
  return {
    message: request.body.name
  }
})

const start = async() => {
  try{
    server.listen(3000)
  }catch(e){
    server.log.error(e)
    process.exit(1)
  }
}

start()
