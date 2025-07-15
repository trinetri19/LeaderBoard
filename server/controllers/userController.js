const User = require('../models/user');

exports.getUsers = async (req,res) => {
    const users = await  User.find().sort({points:-1})
    res.json(
        users
    )
}

exports.addUser = async(req,res)=>{
    const { name } = req.body;
    const newUser = new User({name});
    await newUser.save();
    res.json(newUser);
}
