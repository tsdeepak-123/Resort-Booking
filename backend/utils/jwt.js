const jwt=require('jsonwebtoken')


const createToken=(id)=>{
    return jwt.sign({id:id},"secretCodeforPartner",{expiresIn:"3d"})
}



module.exports=createToken