const auth0Server = require("./16-auth0")

const PORT = process.env.PORT || 3002
auth0Server.listen(3002, () => console.log(`We are online at port: ${PORT}`))