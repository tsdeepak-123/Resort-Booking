const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const UsersSchema = new Schema({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: Number, required: true },
  Password: { type: String, required: true },
  Image: { type: String },
  IsBlocked: { type: Boolean },
  Address: {
  },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports= Users;

