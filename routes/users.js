const express = require('express');
const router = express.Router();
const db = require('../db');



router.get('allusers', async(req,res) => {
    try{
        const response = await db.promise().query('SELECT * FROM users');
        console.log(response);
        res.send(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})


module.exports = router;