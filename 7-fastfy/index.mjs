import fastify from "fastify"

const server = fastify({logger:true})

server.get('/', async(request, reply) => {
  reply.code(201)
  return {
    message: 'hello world'
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
