const express = require('express');
const router = express.Router();
const Person = require('../models/person');


router.get('/', async (req,res)=>{
     try {
        const data=await Person.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (error) {
         console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
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

router.get('/:workType', async(req,res)=>{
    try {
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work: workType});
            console.log('Fetched person from database');
            res.status(200).json(response);
        }else {
            res.status(404).json({error: "Invalid work type"});
        }
    }catch(err){
     console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router;