const express  = require('express');
const app = express();
const http = require("http").Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3306;
const async = require('async');
const usersController = require('./Controllers/users');

app.use((req,res,next)=>{
  console.log(req.url,req.body);
  next();
})

app.get('/', function (req, res){
  res.send('Default landing page');
});
app.use("/users",require("./Routes/users"));


http.listen(port,function(){
  console.log("server is running on port : ",port);
});
