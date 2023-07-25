const user = require("../model/userModel");
const createToken  = require("../utils/jwt");
const bcrypt =require('bcrypt');
const {otpGen}=require('../utils/mailer')
const {sendVerification}=require('../utils/sendOtp')


//>>>>>>>>>>>>>>>>>>>>Here handle the user sign up and sending otp<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const handleSignup = async (req, res) => {
  try {
    const { Name, Email, Phone, Password } = req.body;
    if(Name, Email, Phone, Password){
    const alreadyExist = await user.findOne({ email: Email });
    if (alreadyExist) {
      res.status(400).json({ error: "Email already exists" });
    }

  
    const otp = otpGen();
    req.session.user = req.body;
    req.session.user.otp = otp;
    console.log(otp);
    sendVerification(Name, Email, otp);
    res.json({ success: "Otp send successfully"});
  }else{
    res.json({error:'All fields required'})
  }
 } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



//>>>>>>>>>>>>>>>>>>>>Here otp verification and save user data into database<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const otpVerification=async(req,res)=>{
  try {
    const {otp}= req.body;
  const genOtp = req.session.user.otp;
  console.log(genOtp);
  if(otp===genOtp){
    const { Name, Email, Phone, Password } = req.session.user;
      // const hashPassword = await bcrypt.hash(Password, 10);

    const newUser = new user({
      Name,
      Email,
      Phone,
      Password
    });
    const savedUser = await newUser.save();

    const token = createToken(savedUser._id);
    res.json({ success: "User Registered successfully", user: token });
  }else{
    res.json({error:'Invalid otp'})
  }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
}

//>>>>>>>>>>>>>>>>>>>>Here Resending the Otp<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const resendOtp = (req, res) => {
  try {
    const{Name,Email}=req.session.user
    otp = otpGen();
    sendVerification(Name,Email,otp);
   res.json({success:"Otp resend successfully"})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};






module.exports={handleSignup,otpVerification,resendOtp }
