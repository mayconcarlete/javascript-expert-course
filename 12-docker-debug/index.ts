import express from 'express'
import {Request, Response} from 'express'
const app = express()

const fn = () => {
  return 2 * 2
}

app.get('/', async(req:Request, res:Response) => {
  const valor = fn()
  res.status(200).send({message: valor})
})

app.listen(3000, () => {
  console.log('we are online')
})