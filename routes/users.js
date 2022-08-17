const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('/allusers', async (req,res) => {
    try{
        const response = await db.promise().query('SELECT * FROM users');
        console.log(response[0]);
        res.status(200).json(response[0]);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})


module.exports = router;