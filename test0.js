 const name = 'Ahmed';// never change
 var country = "Pakistan"; // var
 let city = "Abbottabad"; // var
 street = "Sir syed - 12";// var
 let roll_no = 123;
 let cgpa = 3.4;
 let isRain = false;
 console.log("name",name,typeof name);
 console.log("country",country,typeof country);
 console.log("city",city,typeof city);
 console.log("street",street,typeof street);
 console.log("roll_no",roll_no,typeof roll_no);
 console.log("cgpa",cgpa,typeof cgpa);
 console.log("isRain",isRain,typeof isRain);
 function printBoolean(){
   return false;
 }
 let test = printBoolean();
 console.log(test);
 function call_my_name(name){
   console.log("name is ",name);
 }
 call_my_name("Pakistan");

 let arr = ["Lahore","Islamabad","karachi"];// pre-defined
 let arr2 = Array(5);
 arr2[3] =  13.5;
 arr2.push("Multan");

 console.log(arr2);

 console.log(arr[0],"length = ",arr.length);
 console.log("length = ",arr2.length);

 let person = {
  "name" : "Ahmed",
  "age" : 22,
  "walk" : function () {
    console.log("person is walking");
  }
 };

 person.walk();

 console.log(person,person.age);

 // anonymous function
 let color = function (n){
   return "red";
 }

 console.log(color("12"));

 // arrow

 let color2 = (n) => {
   console.log(n);
 }

 color2();

 // call back

 function getAllTechers(callback){
   let data = [];
   setTimeout(()=>{
     // read data from db
     data.push("Teacher 1");
     data.push("Teacher 2");
     callback(false,data);
   },4000);
 }

 getAllTechers((error,allTeachers) => {
   console.log(error,allTeachers);
 });

 // prmosise
 function getAllStudents(){
   return new Promise((resolve,reject)=>{
     let data = [];
     setTimeout(()=>{
       // read data from db
       data.push("Student 1");
       data.push("Student 2");

       // return reject(error);
       return resolve(data);
     },4000);
     return data;
   });
 }

 getAllStudents().then((data)=>{
   console.log(data);
 }).catch((err)=>{
   console.log(err);
 });
