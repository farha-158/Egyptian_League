const { team , player}=require('../model/relation')

exports.getplayerwithId= async (req,res) =>{
    try{
        
        const playerId=req.params.playerId

        const findplayer=await player.findByPk(playerId)

        if(!findplayer){
            return res.json({message:'player not found'})
        }

        res.json(findplayer)


    }catch(err){
        res.json({error:err.message})
    }
}

exports.getplayerwithname= async (req,res) =>{
    try{
        const name=req.params.name

        const findplayer=await player.findAll({
            where: {
                name:name
            }
        })

        if(findplayer.length === 0){
            return res.json({message:'player not found'})
        }

        res.json(findplayer)
    }catch(err){
        res.json({error:err.message})
    }
}

exports.deletePlayer=async(req,res)=>{
    try{
        const {playerId}=req.body

        const findplayer=await player.findByPk(playerId)

        if(!findplayer){
            return res.json({message:'player not found'})
        }

        if(findplayer.state=='Active'){
            return res.json({message:'state of player is active, not delete'})
        }

        await findplayer.destroy();

        res.json({message:'player is delete successful'})

    }catch(err){
        res.json({error:err.message})
    }
}

exports.postcreateplayer=async(req,res)=>{
    try{
        const {teamId} =req.body

        const findteam=await team.findByPk(teamId)

        if(!findteam){
            return res.json({message:'team not found'})
        }
        const newpla=await player.create(req.body)

        res.json(newpla)

    }catch(err){
        res.json({error:err.message})
    }
}

exports.TransferPlayer=async(req,res)=>{
    try{
        const {playerId , teamId}=req.body

        const findplayer=await player.findByPk(playerId)

        if(!findplayer){
            return res.json({message:'player not found'})
        }

        const findteam= await team.findByPk(teamId)

        if(!findteam){
            return res.json({message:'team not found'})
        }

        const newupdate=await findplayer.update({teamId:teamId});

        res.json(newupdate)

    }catch(err){
        res.json({error:err.message})
    }
}

exports.changesalary=async(req,res)=>{
    try{
        const {playerId , salary}=req.body

        const findplayer=await player.findByPk(playerId)

        if(!findplayer){
            return res.json({message:'player not found'})
        }

        
        const newupdate=await findplayer.update({salary:salary});

        res.json(newupdate)

    }catch(err){
        res.json({error:err.message})
    }
}