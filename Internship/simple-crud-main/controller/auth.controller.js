const User =require ('../models/user');
const jwt = require('jsonwebtoken');


exports.loginUser= async (req,res)=>{
    try {
       const user = await User.findOne({email:req.body.email, age:req.body.age});

        const payload={userId:user._id, age:user.age};

        const token= jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: '1h' });
       res.status(201).json({
         success: true,
         message: 'User created successfully',
         data: user,
         token
       });
     } catch (error) {
       res.status(400).json({ success: false, message: 'unable to find user' });
     }
}