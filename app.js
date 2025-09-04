const express=require('express')
const app=express()
const path = require('path');

const bodyparser=require('body-parser')
const sequelize=require('./config/database')

require('dotenv').config({ path: path.join(__dirname, './.env') });


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

const playerRoute=require('./router/player.route')
const teamRoute= require('./router/team.route')


app.use('/team',teamRoute)
app.use('/player',playerRoute)

sequelize.authenticate().then(()=>{
    console.log('connected db')
}).catch(err=>{console.log(err)})

sequelize.sync({force:false}).then(()=>{
    console.log('create table')
}).catch(err=>{console.log(err)})

app.listen(process.env.PORT,()=>{
    console.log('server work...')
})