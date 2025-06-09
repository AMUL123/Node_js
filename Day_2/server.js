// function calculateCircleArea(r){
//     return 3.14 * r * r;
// }
// let result=calculateCircleArea(2);
// console.log(result);


// function performOperation(num1,num2, operationCallback){
//     return operationCallback(num1,num2);
// }

// function add(num1,num2){
//     return num1+num2;
// }
// function subtract(num1,num2){
//     return num1-num2;
// }
// function multiplication(num1,num2){
//     return num1*num2;
// }
// function division(num1,num2){
//     return num1/num2;
// }
// console.log(performOperation(2,6,add));
// console.log(performOperation(8,3,subtract));
// console.log(performOperation(6,12,multiplication));
// console.log(performOperation(10,2,division));

// const fs=require('fs');
// fs.readFile('note.txt','utf-8',(err,data)=>{
//     if(err){
//         console.err("Error reading file",err);
//        return;
//     }
//     console.log(data);
// })
// const os=require('os');

// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
// console.log("Platform:", os.platform());
// console.log("Number of CPU cores:",os.cpus().length);


// performing sum with the help of lodash library
// const number= [1,2,3,4,5,6,7,8,9,10];
// const _=require('lodash');

// function sumOfEvenNumber(number){
//     const evenNumber=_.filter(number,num=>num%2===0);
//     return _.sumBy(evenNumber);
//  }

//  console.log(sumOfEvenNumber(number));

// const fs=require('fs');

// fs.appendFile('hello.txt','i am very happy today that i am getting improvement but from now i will never look back', ()=>{
//     console.log("file created");
// })
// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err){
//         console.err("Error read file",err);
//         return;
//     }
//     console.log(data);
// })

const numbers=[1,2,3,4,5,6,7,8,9,10];

const _=require('lodash');
function sumOfEvenNumbers(numbers){
    const evenNumbers= _.filter(numbers,num=>num%2===0);
    return _.sumBy(evenNumbers);
}

console.log(sumOfEvenNumbers(numbers));