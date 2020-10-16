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
const User = require('./models/UserTables/tblUser.js')
const bcrypt = require('bcrypt')
const userRoutes = require('./routes/Users/user_routes')
const pibHdrRoutes = require('./routes/Pibs/PibHdr_routes')
const pibDtlRoutes = require('./routes/Pibs/PibDtl_routes')
const pibConRoutes = require('./routes/Pibs/PibCon_routes')
const pibConRRoutes = require('./routes/Pibs/PibConR_routes')
const pibDokRoutes = require('./routes/Pibs/PibDok_routes')
const pibDtlDokRoutes = require('./routes/Pibs/PibDtlDok_routes')
const pibDtlSpekKhususRoutes = require('./routes/Pibs/PibDtlSpekKhusus_routes')
const pibDtlVdRoutes = require('./routes/Pibs/PibDtlVd_routes')
const pibFasRoutes = require('./routes/Pibs/PibFas_routes')
const pibKendaraanRoutes = require('./routes/Pibs/PibKendaraan_routes')
const pibKmsRoutes = require('./routes/Pibs/PibKms_routes')
const pibNptRoutes = require('./routes/Pibs/PibNpt_routes')
const pibPgtRoutes = require('./routes/Pibs/PibPgt_routes')
const pibResBillRoutes = require('./routes/Pibs/PibResBill_routes')
const pibResNPBLRoutes = require('./routes/Pibs/PibResNPBL_routes')
const pibResNPDRoutes = require('./routes/Pibs/PibResNPD_routes')
const pibResRoutes = require('./routes/Pibs/PibRes_routes')
const pibTrfRoutes = require('./routes/Pibs/PibTrf_routes')



const aFormRoutes = require('./routes/PoliceRegistration/aFormRoutes')






const cbu_4w_database = new mdb('./sample database/cbu_4w.mdb')
const formAPib373446 = require('../sample database/formAPib373446.json')

// console.log(formAPib373446.data[1])


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

console.log(tables)

var content = cbu_4w_database.table('tblPibHdr')

// console.log(content[1])

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/user', userRoutes)
app.use('/api/pib', pibHdrRoutes)
app.use('/api/pib', pibDtlRoutes)
app.use('/api/pib', pibConRoutes)
app.use('/api/pib', pibConRRoutes)
app.use('/api/pib', pibDokRoutes)
app.use('/api/pib', pibDtlDokRoutes)
app.use('/api/pib', pibDtlSpekKhususRoutes)
app.use('/api/pib', pibDtlVdRoutes)
app.use('/api/pib', pibFasRoutes)
app.use('/api/pib', pibKendaraanRoutes)
app.use('/api/pib', pibKmsRoutes)
app.use('/api/pib', pibNptRoutes)
app.use('/api/pib', pibPgtRoutes)
app.use('/api/pib', pibResBillRoutes)
app.use('/api/pib', pibResNPBLRoutes)
app.use('/api/pib', pibResRoutes)
app.use('/api/pib', pibResNPDRoutes)
app.use('/api/pib', pibTrfRoutes)
app.use('/api/policeregistration', aFormRoutes)











//app.get('/home', (req, res)=>{res.send('Fahri Goreng')});


app.listen(portConnectTo.serverConnection, ()=> console.log(`we are online ${portConnectTo.serverConnection}`));
