const {
  AuthenticationDetails,
  CognitoRefreshToken,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
} = require("amazon-cognito-identity-js");
const jwkToPem = require("jwk-to-pem");
const jsonwebtoken = require("jsonwebtoken");

// class CognitoService {
//   static verifyJwtStructure(token){
//     const jwt = token.split(".")
//     if(jwt.length !== 3){
//       return false
//     }
//     return true
//   }
//   static async getJwks(){
//     const jwks = await fetch(
//       `https://cognito-idp.us-west-2.amazonaws.com/us-west-2_zrpD1qIt9/.well-known/jwks.json`
//     );
//     return {
//       status: jwks.status,
//       jwks: await jwks.json()
//     }
//   }
// }
// const token = "eyJraWQiOiIxUm5GZU1QZm1HWktcL05sbncxcFB6Q01VYWp3QWhGT090XC9HQ2RUaWxWMkk9IiwiYWxnIjoiUlMyNTYifQ.eyJvcmlnaW5fanRpIjoiY2Q1Y2IxZDItZGE4ZS00NWQ5LTk4MTYtZTk4MDkxZjRhNWRiIiwic3ViIjoiNjQ5NWJhYjgtYmViNi00OTg3LTlhYWItMzYwNGYzMjQzZWVjIiwiZXZlbnRfaWQiOiI1NmE0ZjZlOC1iYWQ0LTQwMmEtOGJmMS1jNjFiMzJiOGUxM2QiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjUxMTcwMDEwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl96cnBEMXFJdDkiLCJleHAiOjE2NTExNzM2MTAsImlhdCI6MTY1MTE3MDAxMCwianRpIjoiZTZiYzQ5YjktNDU4Yy00ODJhLWEyMjctYTI3MDQ5MzUyYzcyIiwiY2xpZW50X2lkIjoiNHJpaW1wNHM1MDB1c2ZibzhoZTg5cmxwMGUiLCJ1c2VybmFtZSI6Im1heWNvbi5jYXJsZXRlQGdtYWlsLmNvbSJ9.OHHji2EvaizBYcwGV-v3JNyusfwdDPwbfvRBQBjHfj9ef0j2G7wIW8sEoUfXX8ehd3tpYZDaAAjwzU3tx-eBYLaaPTTeHDAVTBdsYlxKcuwwRuzFZCFrMpSoDTmiPMhzKrE_tLtKatMMDyCoiynNZL_HFnIRkVu_L59M91nQSERDxsPzVl_FWvwAYZ0cPbx0DwP_AYpu7Rvvf2aIiAsCR-tNfDGr-DbsQyJEjCJwFo2FAe9T2xe_D_2_mSuD-UZ0quJkq3L4Gc2yNV_tBmS18REQJ33KmmdQjQmlOXOx_04M_wfbK1v3Kyf6v1AJS0QmYhGhXPTMUEG0jpU_vcxNKQ"
// ;
// (async() => {
//   const {jwks, status} = await CognitoService.getJwks()
//   const decodedTokenHeader = JSON.parse(
//     Buffer.from(token.split(".")[0], "base64").toString()
//   )
//   const usedJwk = jwks.keys.find(jwks => jwks.kid === decodedTokenHeader.kid)
//   if(usedJwk){
//     const decodedToken = await new Promise((resolve, reject) => {
//       const pem = jwkToPem(usedJwk)
//       jsonwebtoken.verify(
//         token,
//         pem,
//         { algorithms: ["RS256"] },
//         (err, decodedToken) => {
//           if(err){
//             reject(err)
//           }
//           resolve(decodedToken)
//         }
//         )
//     })
//     console.log(decodedToken)
//   }
;
(async () => {
  const email = "test_user@mail.com";
  const password = "@Test1234";
  const url = "https://cognito-idp.us-west-2.amazonaws.com/";
  const body = {
      AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
      },
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: "4riimp4s500usfbo8he89rlp0e",
  };
  const headers = {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target":
          "AWSCognitoIdentityProviderService.InitiateAuth",
  };
  const payload = await fetch(url, {
      method: "post",
      headers: headers,
      body: JSON.stringify(body),
  });

  console.log(payload.status);
  console.log(payload);
  console.log(await payload.json());
})
()
