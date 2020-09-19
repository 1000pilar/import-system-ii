const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const portConnectTo = require('./helpers/portConnection')
const mongoose = require('mongoose')
const mdb = require('mdb-parse')


const cbu_4w_database = new mdb('./sample database/cbu_4w.mdb')



mongoose.connect(portConnectTo.databaseConnection, {useNewUrlParser: true, 
useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Import Database Connection Succesfuly');
})

var tables = cbu_4w_database.list()

console.log(tables)

var content = cbu_4w_database.table('tblPibDtl')

console.log(Number(content[1].DNilInv))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/home', (req, res)=>{res.send('Fahri Goreng')});


app.listen(portConnectTo.serverConnection, ()=> console.log(`we are online ${portConnectTo.serverConnection}`));
