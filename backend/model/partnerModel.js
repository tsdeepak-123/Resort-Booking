const mongoose = require('mongoose');

const { Schema } = mongoose;

const PartnerSchema = new Schema({
  Name: { type: String, required: true },
  Phone: { type: Number, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  CompanyName: { type: String },
  Proof: { type: String },
  IsBlocked: { type: Boolean },
  Address: {
  },
  Image: { type: String },
  IsApproved: { type: Boolean},
});

const Partner = mongoose.model('Partner', PartnerSchema);
module.exports= Partner;

