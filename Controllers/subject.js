const subject_pic = (reqData,callback) => {
  dbConnection.queryWithParams("update users set profile_addresss = ? where ID = ?",[reqData.profile,reqData.userId]).then((data)=>{
    return callback({
      "error" : false,
      "message" : "Picture Updated Successfully",
      "profile" : reqData.profile
    });
  }).catch((error)=>{
    console.log(error);
    return callback({
      "error" : true,
      "message" : "Something went wrong."
    });
  });
}
