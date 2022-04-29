
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
const dynogels = require("dynogels")
const appeals = new Appeals()
const moment = require("moment")
;
// async function getUserAppeals() {
//   const uid = "2maycon_uid";
//   const userAppeals = await Appeals.query(uid)
//   .usingIndex("uid-status-index")
//   .where("status")
//   .gte(569)
//   .loadAll()
//   .execAsync();
//   console.log(userAppeals.Count)
//   if(userAppeals.Count === 0){
//     return undefined
//   }
//   const userAppealss = userAppeals.Items.map(appeal => appeal.attrs)
//   return userAppealss
// }
// async function getUserAppeals(user) {
//   const uid = "2maycon_uid";

//   const queryUserAppeals = await Appeals.query(uid)
//       .usingIndex("uid-status-index")
//       .where("status")
//       .gte(569)
//       .loadAll()
//       .execAsync();
//   if (queryUserAppeals.Count === 0) {
//       return undefined;
//   }
//   const userAppeals = queryUserAppeals.Items.map(
//       (appeal) => appeal.attrs
//   );
//   return userAppeals;
// }
async function doesUserHasAppealUnderReview(uid) {
  const hasAppealUnderReview = await Appeals.query(uid)
      .usingIndex("uid-status-index")
      .loadAll()
      .execAsync();
  hasAppealUnderReview ? true : false;
  return hasAppealUnderReview
}

async function getLastAppeal(uid){
  const appeal = await Appeals.query(uid)
  .where("createdAt").gte(0).descending().limit(1).execAsync()

  return appeal.Items[0].attrs
}

(

  async() => {
    try{
      // const appeal = new Appeals({status: 571, uid: "2maycon_uid",createdAt: Date.now(), email:"mail@mail.com", description:"a", codeReason: 534, alreadySeen:false})
      // await appeal.saveAsync()
      // const appeals = await Appeals.getAsync({status: 569})
      // const appeals = await Appeals.query(569)
      //       .usingIndex("status-createdat-index")
      //       .loadAll()
      //       .execAsync();
      // const appeals = await Appeals.getAsync({uid:"3maycon_uid"})
      // const appeals = await doesUserHasAppealUnderReview("2msaycon_uid")
      // const appeals = await getUserAppealToBeDisplayed()
      const deniedUnseenAppeal= {
        uid: "valid_uid",
        email: "valid@mail.com",
        aips: ["172.58.236.123"],
        b_reason: 12,
        description: "Any reason",
        total_of_apps: 139,
        sc: ["US"],
        user_media_sources: ["organic"],
        faceVerified: true,
        alreadySeen: false,
        spend: 19.92,
        codeReason: 534,
        n_dids: 3,
        ipqs_fraud_score: 40,
        tgp: 8,
        active_days_span: 580,
        sr: [10],
        status: 570,
        createTimestamp: moment().utc().valueOf(),
        updateTimestamp: moment().utc().valueOf(),
    }
      // for(let i=0; i<30; i++){
      //   deniedUnseenAppeal.uid = `valid_uid`
      //   deniedUnseenAppeal.createdAt = i
      //   deniedUnseenAppeal.updatedAt = i
      //   const appeals = new Appeals(deniedUnseenAppeal)
      //   appeals.saveAsync()
      // }
      // const appealll = new Appeals([deniedUnseenAppeal, deniedUnseenAppeal])
      // console.log(await appealll.getUnseenAppeals())
      // console.log(appealll.get())
      // const appeals = await getUnseenAppeals(0)
      // appeals.Items.map(appeal => console.log(appeal.attrs))
      // console.log(appeals.Items.map(appeal => console.log(appeal)))
      // console.log(appealll)
      // console.log(appeals.LastEvaluatedKey)
      // await getLastAppeal("valid_uid")
      // const dateNow = moment().utc()
      // const dateTomorrow = moment().utc().add(1,"day")
      // console.log(dateNow <= dateTomorrow)
      // console.log(dateNow > dateTomorrow)
      // console.log(dateNow, dateTomorrow)

      // await appeal.saveAsync()
      // const appeal = await Appeals.getAsync({uid: deniedUnseenAppeal.uid})
      // console.log("valor: ",appeal.get("Victor"))
      // const hasBlockedField = appeal.get("victor");
      // const obj = {
      //   blocked: hasBlockedField ? false: null
      // }
      // appeal.updateAsync(obj)
      // const appeal = await new Appeals(deniedUnseenAppeal)
      // console.log(appeal)
      // console.log(appeal.get())
      // await Appeals.updateAsync({uid: "valid_uid", alreadySeen: true, description: "Maykerops"})
      const table = await dynogels.createTablesAsync()
    }catch(error){
      console.log(error)
    }
  }
)()
