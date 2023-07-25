const partner = require("../model/partnerModel");
const createToken  = require("../utils/jwt");
const bcrypt =require('bcrypt');
const {otpGen}=require('../utils/mailer')
const {sendVerification}=require('../utils/sendOtp')


//>>>>>>>>>>>>>>>>>>>>Here handle the partner sign up and sending otp<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const handleSignup = async (req, res) => {
  try {
    const { Name, Email, Phone, Password } = req.body;
    if(Name, Email, Phone, Password){
    const alreadyExist = await partner.findOne({ email: Email });
    if (alreadyExist) {
      res.status(400).json({ error: "Email already exists" });
    }

  
    const otp = otpGen();
    req.session.partner = req.body;
    req.session.partner.otp = otp;
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



//>>>>>>>>>>>>>>>>>>>>Here otp verification and save partner data into database<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const otpVerification=async(req,res)=>{
  try {
    const {otp}= req.body;
  const genOtp = req.session.partner.otp;
  console.log(genOtp);
  if(otp===genOtp){
    const { Name, Email, Phone, Password } = req.session.partner;
      // const hashPassword = await bcrypt.hash(Password, 10);

    const newPartner = new partner({
      Name,
      Email,
      Phone,
      Password
    });
    const savedPartner = await newPartner.save();

    const token = createToken(savedPartner._id);
    res.json({ success: "User Registered successfully", partner: token });
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
    const{Name,Email}=req.session.partner
    otp = otpGen();
    sendVerification(Name,Email,otp);
   res.json({success:"Otp resend successfully"})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};






module.exports={handleSignup,otpVerification,resendOtp }
