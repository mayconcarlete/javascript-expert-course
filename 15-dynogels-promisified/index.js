
// const Test = require("./test")

// const items = [
//   {
//     eventId: "evento-1",
//     uid: "valid_user_id",
//     type: "dialog",
//     startTime: Date.now(),
//     endTime: Date.now() + 100000000000,
// },
// {
//   eventId: "evento-2",
//   uid: "valid_user_id",
//   type: "dialog",
//   startTime: Date.now(),
//   endTime: Date.now() + 100000000000,
// },{
//   eventId: "evento-3",
//   uid: "valid_user_id",
//   type: "dialog",
//   startTime: Date.now(),
//   endTime: Date.now() + 100000000000,
// },
// ]
// class Test2 extends Test{
//   async getAsynnc(){
//     super.scan().execAsync()
//   }

//   async pega(){
//    const dialogs = await Test.scan()
//             .where("type")
//             .eq("dialog")
//             .execAsync();

//     return dialogs
//   }
//   async salvaAe(items){
//     const result = await Test.createAsync(items)
//     return result
//   }
// }

// const sut = new Test2()

// // sut.pega().then(dialog => {
// //   console.log(dialog.Items[0].attrs)
// //   Test.destroy(dialog.Items[0].attrs.eventId, "dialog",(err, data) => {
// //     if(err) console.log(err)
// //     console.log("dataL: ", data)
// //   })
// // }).catch(console.log)
// sut.salvaAe(items).then(console.log).catch(console.log)

// const listOfDialogs = [
//   {
//       eventId: "event-1",
//       uid: "bla",
//       type: "dialog",
//       startTime: Date.now(),
//       endTime: Date.now() ,
//       unseenDate: Date.now(),
//   },
//   {
//       eventId: "event-2",
//       uid: "bla",
//       type: "dialog",
//       startTime: Date.now(),
//       endTime: Date.now(),
//       unseenDate: Date.now(),
//   },
// ];
// function getNotSeenDialog(dialogs) {
//   return dialogs.find((dialog) => !dialog.unseenDate);
// }

// const result = getNotSeenDialog(listOfDialogs)
// console.log(result)

const Appeals = require("./test")

const appeals = new Appeals()

;

(
  async() => {
    const getAppeals = await appeals.createAppeal("valid_uid", "valid@mail.com")
    console.log(getAppeals.get("appeals"))
  }
)()