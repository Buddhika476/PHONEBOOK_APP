const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb/connect');
require('dotenv').config();

const addPhone = require('../server/routes/addphone.route');
const getPhone = require('../server/routes/getphone.route');
const putPhone = require('../server/routes/updatephone.route');
const PhoneBook = require('./mongodb/Model/phoneBook');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

connectDB(process.env.MONGODB_URL);

app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}..');
})

app.use('/add-phone',addPhone);
app.use('/get-phone',getPhone);
app.use('/put-phone',putPhone);