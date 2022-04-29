const mockExpress = require("@jest-mock/express")

describe("test", () => {
  it("aiaiai", async() => {
    const req = mockExpress.getMockReq()
    const res = mockExpress.getMockRes().res
    const next = mockExpress.getMockRes().next
    const mockClear = mockExpress.getMockRes().mockClear
    const err = new Error("Maycon")
    await async function requestou(err, req, res, next){
      next(new Error("veio mesmo"))
    }
  })
})