const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const MenuItem = require('./models/MenuItem');
const Task = require('./models/Task');

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


app.post('/menu', async (req, res) => {
    try {
        const menuItemData = req.body;
        const menuItem = new MenuItem(menuItemData);
        // Save the new person to the database using await
        const savedMenu = await menuItem.save();
        console.log('Saved person to database');
        res.status(201).json(savedMenu);
    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/api/tasks', async (req, res) => {
    try {
        const TaskData = req.body;
        const task = new Task(TaskData);
        const savedTask = await task.save();
        console.log('Saved task to database');
        res.status(201).json(savedTask);
    } catch (error) {
        console.error('Error saving task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/menu',async (req,res)=>{
    try {
        const data=await MenuItem.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (error) {
         console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/api/tasks', async (req, res) => {
    try {
        const data = await Task.find();
        console.log('Fetched tasks from database');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);



app.listen(3000, () => {
    console.log("listening on port 3000")
})