// console.log("server is connected");

// function add(a,b){
//     return a+b;
// }
// var add=(a,b)=>{
//     return a+b;
// }
// var result=add(9,8);
// console.log(result);

// function callback(){
//     console.log("callback function is called");
// }

// const add= function(a,b,callback){
//     var result=a+b;
//     console.log(result);
//     callback();
// }
// add(9,8,()=> console.log('add completed'));

// var fs= require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('greeting.txt','Hello you are good great'+ user.username+'!\n',()=>{
//     console.log('file is created');
// });

const notes = require('./notes');
var _=require('lodash');

var data = ["person", "person",1,2,1,2,'name','age'];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString('ram'));

// var age=notes.age;
// var result=notes.addNumber(age,18);
// console.log(result);
// console.log(age);