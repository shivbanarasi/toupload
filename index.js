const bodyParser = require('body-parser');
const fs=require('fs')
const express=require('express');
const path=require('path');
const Sequelize=require('./util/database');
//const serveStatic = require('serve-static');
const User=require('./models/user');
//const helmet=require('helmet');
const cors=require('cors')
//const morgan=require('morgan')
const compression=require('compression')
const Expence=require('./models/expence');
const Forgetpass=require('./models/forgetpass')
const Payment=require('./models/payment')
const adminroute=require('./route/admin')
const app=express()
const port=3000;




//app.use(helmet())
app.use(compression())
//app.use(morgan('combined',{stream:fs.accessLogStream}))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
console.log(path.join(__dirname,'./','frontend','login.html'))
app.use('/frontend',express.static(path.join(__dirname,'./','frontend')))

app.use(adminroute)

User.hasMany(Expence);
Expence.belongsTo(User)
User.hasMany(Forgetpass);
Forgetpass.belongsTo(User)


Sequelize.sync()
.then((res)=>{
   // console.log(res);
})
app.listen(process.env.PORT||port,()=>{
    console.log(`listing to the port:${port}`);
})