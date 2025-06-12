const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


router.get('/',async (req,res)=>{
    try {
        const data=await MenuItem.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (error) {
         console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
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
router.get('/:tasteType', async(req,res)=>{
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
            const response = await MenuItem.find({taste: tasteType});
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