
const Test = require("./test")


class Test2 extends Test{
  async getAsynnc(){
    super.scan().execAsync()
  }

  pega(){

    return new Promise((resolve, reject) => {
      Test.scan()
          .execAsync()
          .then((referrals) => resolve(referrals.Items))
          .catch((err) => reject(err));
  });
  }
}

const sut = new Test2()

sut.pega().then(data => console.log(data[1])).catch(console.log)