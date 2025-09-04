const { team , player}=require('../model/relation')

exports.getallteams= async (req,res) =>{
    try{
        const allteam=await team.findAll({
            attributes: ['id', 'name'],
            include:[
                {model:player,attributes: ["id", "name", "salary"]}
            ]
        })

        res.json(allteam)

    }catch(err){
        res.json({error:err.message})
    }
}

exports.getteam=async(req,res)=>{
    try{

        const teamId=req.params.teamId

        const findteam=await team.findByPk(teamId, {
            include: [{ model: player }]
        })

        if(!findteam){
            return res.json({message:'team not found'})
        }

        res.json(findteam)

    }catch(err){
        res.json({error:err.message})
    }
}

exports.postcreateteam=async(req,res)=>{
    try{
        const newteam= await team.create(req.body)
        res.json(newteam)
    }catch(err){
        res.json({error:err.message})
    }
}

exports.postUpdateColor=async(req,res)=>{
    try{
        const {teamId}=req.body

        const findteam=await team.findByPk(teamId)

        if(!findteam){
            return res.json({message:'team not found'})
        }

        const update= await findteam.update({ tShrit_Color: req.body.tShrit_Color })

        res.json(update)
    }catch(err){
        res.json({error:err.message})
    }
}