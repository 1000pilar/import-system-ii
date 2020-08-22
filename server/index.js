const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/import_database', {useNewUrlParser: true, 
useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Import Database Connection Succesfuly');
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/*', (req, res)=>{res.send('Fahri Goreng')});


app.listen(port, ()=> console.log(`we are online ${port}`));
