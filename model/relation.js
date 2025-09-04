const team=require('./team.model')
const player=require('./player.model')

team.hasMany(player,{foreignKey:'teamId'})
player.belongsTo(team,{foreignKey:'teamId'})

module.exports={team,player}