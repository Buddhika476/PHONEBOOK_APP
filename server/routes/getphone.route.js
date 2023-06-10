const express = require('express');
const PhoneBook = require('../mongodb/Model/phoneBook');

const router = express.Router();

router.get('/', async(req,res)=>{
    const phoneNumber = await PhoneBook.find({})
    try{
        res.status(200).json({
           status :'success',
           data:{
            phoneNumber
           }
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message: err
        })
    }
})

module.exports = router;