const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const Person = require('./models/person')


app.get('/', function (req, res) {
    res.send('Server is started and connected to hotel');
})
// app.post('/person', (req, res) => {
//     const data = req.body// assuming the request body contains the person data


//     // create a new person document using the Mongoose model
//     const newPerson = new Person(data);
//     // newPerson.name = data.name;
//     // newPerson.age=data.age;
//     // newPerson.mobile=data.mobile;
//     // newPerson.email=data.email;
//     // newPerson.address=data.address; to abvoid the long task


//     // save the new person to the database

//     newPerson.save((error, savedPerson) => {
//         if (error) {
//             console.error('Error saving person:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             console.log('Data saved');
//             res.status(201).json(savedPerson);
//         }
//     });




// })

app.post('/person', async (req, res) => {
    try {
        const newPersonData = req.body;
        const newPerson = new Person(newPersonData);
        // Save the new person to the database using await
        const savedPerson = await newPerson.save();
        console.log('Saved person to database');
        res.status(201).json(savedPerson);
    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/person',async (req,res)=>{
    try {
        const data=await Person.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (error) {
         console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})