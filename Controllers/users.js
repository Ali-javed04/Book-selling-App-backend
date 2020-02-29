const dbConnection  = require('dbConnection');

const sign_in = (reqData,callback)=>{
  dbConnection.queryWithParams("select * from users where email = ? password = ?",[reqData.email,reqData.password])
  .then((data)=>{
    if(data == undefined || data.length == 0){
      return callback({
        "error" : true,
        "message": "your email or password is invalid"
      });
    }else{
      return callback({
        "error" : false,
        "message" : "Logged In Successfully",
        "user" : data[0]
      });
    }

  }).catch((err)=>{
    console.error(err);
    return callback({
      "error" : true,
      "message" : "Something went wrong.Please try again"
    });

  });
}
module.exports = {
  sign_in
}
