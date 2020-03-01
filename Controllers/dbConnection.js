const mysql = require("mysql");

const pool = mysql.createPool({
  "host" : "localhost",
  "user" : "root",
  "database" : "android_book_selling_app",
  "password" : "",
  "connectTimeout": 60 * 60 * 1000,
    "acquireTimeout": 60 * 60 * 1000,
  "connectionLimit" : 10
});

const query = (sql) => {
 return new Promise((resolve,reject)=>{
   pool.getConnection((error,connection)=>{
     if(error){
       return reject(error);
     }else{
       connection.query(sql,(queryError,results,fields)=>{
         connection.release();
         if(queryError){
           return reject(queryError);
         }else{
           return resolve(results);
         }
       });
     }
   });
 });
};

const queryWithParams = (sql,params) => {
  return new Promise((resolve,reject)=>{
    pool.getConnection((error,connection)=>{
      if(error){
        return reject(error);
      }else{
        connection.query(sql,params,(queryError,results,fields)=>{
          connection.release();
          if(queryError){
            return reject(queryError);
          }else{
            return resolve(results);
          }
        });
      }
    });
  });
};

module.exports = {
  query,
  queryWithParams
}
