const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport=require('./auth')

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body
const PORT = process.env.PORT || 3000;

const Task = require('./models/Task');

//Middleware funtion
const logRequest = (req,res,next)=>{
    //console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);



app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false});

app.get('/' ,function (req, res) {
    res.send('Welcome to our hotel');
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

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);



app.listen(PORT, () => {
    console.log("listening on port 3000")
})