const express=require('express')
const partnerRoute=express()
const {handleSignup,otpVerification,resendOtp}=require('../controllers/partnerController')

partnerRoute.post('/signup',handleSignup)
partnerRoute.post('/otpsubmit',otpVerification)
partnerRoute.post('/resendotp',resendOtp)

module.exports=partnerRoute