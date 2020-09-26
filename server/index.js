const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var cookieParser = require('cookie-parser');
const portConnectTo = require('./helpers/portConnection')
const mongoose = require('mongoose')
const mdb = require('mdb-parse')
const passport = require('passport')
const LocalStrategy = require('passport-local');
const router = require('./routes/Users/user_routes');
const User = require('./models/UserTables/tblUser.js')
const bcrypt = require('bcrypt')
const userRoutes = require('./routes/Users/user_routes')



const cbu_4w_database = new mdb('./sample database/cbu_4w.mdb')
const formAPib373446 = require('../sample database/formAPib373446.json')

// console.log(formAPib373446.data[1 ])


mongoose.connect(portConnectTo.databaseConnection, {useNewUrlParser: true, 
useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Import Database Connection Succesfuly');
})

passport.use(new LocalStrategy(
    function (username, password, done){
      // console.log(username)
      User.findOne({username: username}, function(err, user){
        if (err) { return done(err); }
        if (!user) { return done(null, {message: `username or password invalid`}); }
        if (!bcrypt.compareSync(password, user.password)) { return done(null, {message: `password invalid`}); }
        return done(null, user);
      })
    }
  ))

var tables = cbu_4w_database.list()

// console.log(tables)

var content = cbu_4w_database.table('tblPibHdr')

// console.log(content[1])

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/user', userRoutes)

//app.get('/home', (req, res)=>{res.send('Fahri Goreng')});


app.listen(portConnectTo.serverConnection, ()=> console.log(`we are online ${portConnectTo.serverConnection}`));
