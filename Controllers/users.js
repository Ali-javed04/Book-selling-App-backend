const dbConnection  = require('./dbConnection');

const sign_in = (reqData,callback)=>{
  dbConnection.queryWithParams("select * from users where email_address = ? password = ?",[reqData.email,reqData.password])
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

const create = (reqData,callback)=>{
  dbConnection.queryWithParams("insert into users set ?",{
    "name" : reqData.name,
    "address" :reqData.	address,
    "phone_number":reqData.phone_number,
    "email_address" : reqData.email,
    "password" : reqData.password,
    "account_type" : reqData.type,
      "profile_addresss" : "user.png"
  }).then((data)=>{
    return callback({
      "error" : false,
      "message" : "Account created scucessfully"
    });

  }).catch((err)=>{
    console.error(err);
    return callback({
    "error":true,
    "message": "Something went wrong during creating account"
    });
  });
}
module.exports = {
  sign_in,
  create
}
