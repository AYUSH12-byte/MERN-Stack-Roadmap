const jwt= require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({status:false, message:"not valid token"})
    }

    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(error){
        return res.status(403).json({status:false, message:"invalid token"})
    }
}
module.exports=verifyToken; 