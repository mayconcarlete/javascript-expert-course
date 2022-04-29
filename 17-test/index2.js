const express = require("express")

const app = express()
app.use(express.json())
// const fn1 = (req, res, next) =>{
//   // next(new Error("Maycon"))
//   throw new Error("Maycon2")
// }
// const fn2 = (err, req, res, next) => {
//   next(err)
// }
// const fn3 = (err, req, res, next) => {
//   console.log(err)
//   res.send(err)
// }
// app.get("/", (req, res) => {
//   console.log("cheguei hamachi")
//   res.send({data: "Hello Victor, until now, you owe me a pizza "})
// })

app.get("/", (req, res) => {
  console.log("request chegou")
  res.status({data:"hello"})
})


app.listen(3002, () => console.log("we are online"))
