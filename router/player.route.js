const route =require('express').Router()

const playercontroller=require('../controller/player.controller')

route.get('/getplayerwithId/:playerId',playercontroller.getplayerwithId)
route.get('/getplayerwithname/:name',playercontroller.getplayerwithname)

route.post('/TransferPlayer',playercontroller.TransferPlayer)
route.post('/changesalary',playercontroller.changesalary)
route.post('/deletePlayer',playercontroller.deletePlayer)
route.post('/createplayer',playercontroller.postcreateplayer)

module.exports=route