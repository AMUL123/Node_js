// const express = require('express');
// const app = express();

const { json } = require("express");

// app.get('/',function(req,res){
//     res.send('Server is started');
// })
// app.get('/milk',function(req,res){
//     res.send('yes sir i would love to serve milk');
// })
// app.get('/idli',function(req,res){
//     var customized_idl= {
//         name: 'rava idli',
//         size: '10 ch diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
//     res.send(customized_idl);
// })

// app.listen(3000,()=>{
//     console.log('server is running on port 3000');
// });
// const jsonData = '{"product": "Laptop","price":999.99}';
// const parseData = JSON.parse(jsonData);
// console.log(parseData);

// const objectToConvert = {"name": "Bob", "age":30};
// const jsonString=JSON.stringify(objectToConvert);
// console.log(jsonString);

const express=require('express');
const app=express();

app.get('/weather',(req,res)=>{
    const weatherData = {
        temperature: 25,
        condition: 'sunny and moon',
        city: 'Los Angeles'
    };
    res.send(weatherData);
});

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

