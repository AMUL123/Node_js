const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const { jwtAuthMiddleware, generateToken } = require('./../jwt');


router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const newPersonData = req.body;
        const newPerson = new Person(newPersonData);
        // Save the new person to the database using await
        const savedPerson = await newPerson.save();
        console.log('Saved person to database');
        const payload= {
            id: savedPerson.id,
            username: savedPerson.username
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log('Token is :', token);
        res.status(200).json({ savedPerson: savedPerson, token: token });
    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({ work: workType });
            console.log('Fetched person from database');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid work type" });
        }
    } catch (err) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {

    try {
        const personId = req.params.id; //Extract hte id from the URL Parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose Validation
        })
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('Person deleted');
        res.status(200).json({ message: 'person deleted successfully' });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})



module.exports = router;