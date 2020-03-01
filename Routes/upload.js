const express = require('express');
const router = express.Router();
const multer = require('multer');
const usersController = require("../Controllers/users");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploadedFiles")
  },
  filename: function (req, file, cb) {
    cb(null, (new Date).getTime() + "_" + file.originalname)
  }
});

const upload = multer({ storage: storage })

router.post("/", upload.single("image"), (req,res)=>{
  if(req.file != undefined){
    console.log(req.file);
    if(req.body.action == "profile_update"){
      var filename = req.file.filename;
      req.body["profile"] = filename;
      usersController.update_profile(req.body,(ob)=>{
        res.send(ob);
      });
    }
  }else{
    res.send({
      "error" : true,
      "message" : "something went wrong."
    })
  }
});

module.exports = router;
