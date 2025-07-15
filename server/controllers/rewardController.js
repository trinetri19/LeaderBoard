const User = require('../models/user');
const claimHistory =  require('../models/claimHistory');

exports.claimPoints = async(req,res)=>{
    const userId = req.params.id;
    const randomPoints = Math.floor(Math.random()*10)+1;
    const user = await User.findById(userId);

    if(!user) return res.status(404).json({error:'User Not found'});

    user.points += randomPoints;
    await user.save();

    const history = new claimHistory({
        userId,
        claimPoints: randomPoints
    })
    await history.save()

    res.json({user,randomPoints})
}


exports.history = async (req,res)=>{
    const history = await claimHistory.find().populate('userId').sort({claimedAt:-1})
    res.json(history)
}