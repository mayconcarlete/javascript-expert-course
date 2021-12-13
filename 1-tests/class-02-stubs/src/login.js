class Login {
  async perfom(user){
    const login = await this.makeRequest(true)
    if(login){
      return {
        statusCode: 200,
        data: {
          name: 'Maycon',
          email: 'maycon.carlete@gmail.com'
        }
      }
    }
    return {
      statusCode: 401,
      data: new Error('Not Authorized')
    }
  }
  async makeRequest(reverseValue){
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}

module.exports = Login