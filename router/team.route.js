const route=require('express').Router()
const teamcontroller=require('../controller/team.controller')

route.get('/getallteams',teamcontroller.getallteams)
route.get('/getteam/:teamId',teamcontroller.getteam)

route.post('/createteam',teamcontroller.postcreateteam)
route.post('/updatecolor',teamcontroller.postUpdateColor)

module.exports=route